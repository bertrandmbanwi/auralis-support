<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Environment Guard

Environment Guard makes the workbench itself tell you when you are pointed at
production. It watches three local signals:

- the kubectl `current-context` in your kubeconfig,
- the Terraform workspace marker (`.terraform/environment`),
- the git branch of each workspace folder.

When a signal matches your production patterns, the single Syntalume status
entry changes to a red `$(shield) PROD` state and (optionally) the status bar or
title bar takes a warning tint. An optional editor banner can mark the first
line of visible editors, but only for confirmed production—not staging. Staging
matches get an amber treatment. Syntalume does not add a row of permanent feature
icons.

## Privacy and safety

- **File reads only.** Syntalume never runs `kubectl`, `terraform`, or `git`
  for this feature, and nothing leaves your machine.
- **Trusted workspaces only**, and **off by default**. Enable with
  `Syntalume: Toggle Environment Guard`.
- Desktop VS Code only (browser VS Code has no local files to read).

## Configure

```json
{
  "auralis.environmentGuard.enabled": true,
  "auralis.environmentGuard.tint": "statusBar",
  "auralis.environmentGuard.editorBanner": false,
  "auralis.environmentGuard.alert": "statusOnly",
  "auralis.environmentGuard.prodPatterns": ["prod", "production", "live", "main$", "master$"],
  "auralis.environmentGuard.stagingPatterns": ["stag", "staging", "preprod", "uat", "release"]
}
```

Patterns in Settings are case-insensitive regular expressions matched against
each signal. Matching runs in a cancellable worker with a 250 ms budget per
evaluation, at most 64 patterns per category, 256 characters per pattern, and
4,096 characters per signal. Invalid, oversized, or timed-out checks show an
explicit warning; an incomplete check is never reported as safe. Repository-shared profiles use literal production/staging labels;
Syntalume escapes them before writing workspace patterns so a repository cannot
inject executable regular-expression behavior.

`alert` can be `statusOnly` or `oncePerSignal`. The second option shows one
native warning for a newly detected risky signal, with **View signals** and
**Snooze this signal** actions. A fingerprint, not the raw context or branch
name, is remembered in workspace state to prevent repeat alerts. Snooze hides
the Guard status, tint, and optional editor banner for that exact signal for 30
minutes, then restores them if the signal is still active. The Environment
Status menu shows the remaining time and lets you resume immediately.

`tint` can be `off`, `statusBar`, or `full` (status bar + title bar). The tint
is written to workspace settings and removed automatically when you leave the
risky context; `Syntalume: Reset Syntalume Settings` also removes it.

If the Toggle Environment Guard command enabled Guard, General Reset restores
its prior enabled value as well as removing the owned tint, so a later refresh
cannot tint the workspace again. A manual Settings edit made afterward wins.

`editorBanner` is off by default. When enabled, Syntalume owns one temporary
editor decoration and removes it when production clears, the signal is
snoozed, the setting is disabled, the extension stops, or Syntalume settings are
reset. It never writes editor text or leaves a decoration behind.

Click the Syntalume status entry (or run `Syntalume: Show Environment Status`) to
see exactly which local signal matched and open the relevant settings.
The entry is absent while idle by default. If you explicitly enable
`auralis.environmentGuard.showWhenSafe`, Guard may show a neutral `safe`
shield while it is enabled and no risky signal is present. That legacy label
means no configured risk pattern matched; it does not certify that the
environment is safe.

## JetBrains Companion

The separate optional Companion provides its own local Guard implementation.
Missing or unreadable signals produce an unknown state; unmatched names mean
only that no configured risk pattern matched. Neither outcome guarantees safety.
It reads the first nonempty current context across the ordered `KUBECONFIG` files
(up to 32 files, 1 MiB each) and rejects unsafe YAML aliases or excessive nesting.

Companion custom patterns use the RE2/J engine with at most 32 patterns per
category and 256 characters per pattern. Unsupported lookarounds or
backreferences are reported rather than executed. These limits differ from the
VS Code worker limits above. Open **Syntalume Companion Controls** through
Find Action or Tools, or focus its status widget and press Enter or Space.
