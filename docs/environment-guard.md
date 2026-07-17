<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Environment Guard

Environment Guard makes the workbench itself tell you when you are pointed at
production. It watches three local signals:

- the kubectl `current-context` in your kubeconfig,
- the Terraform workspace marker (`.terraform/environment`),
- the git branch of each workspace folder.

When a signal matches your production patterns, the single Auralis status
entry changes to a red `$(shield) PROD` state and (optionally) the status bar or
title bar takes a warning tint. An optional editor banner can mark the first
line of visible editors, but only for confirmed production—not staging. Staging
matches get an amber treatment. Auralis does not add a row of permanent feature
icons.

## Privacy and safety

- **File reads only.** Auralis never runs `kubectl`, `terraform`, or `git`
  for this feature, and nothing leaves your machine.
- **Trusted workspaces only**, and **off by default**. Enable with
  `Auralis: Toggle Environment Guard`.
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
each signal. Repository-shared profiles use literal production/staging labels;
Auralis escapes them before writing workspace patterns so a repository cannot
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
risky context; `Auralis: Reset Auralis Settings` also removes it.

If the Toggle Environment Guard command enabled Guard, General Reset restores
its prior enabled value as well as removing the owned tint, so a later refresh
cannot tint the workspace again. A manual Settings edit made afterward wins.

`editorBanner` is off by default. When enabled, Auralis owns one temporary
editor decoration and removes it when production clears, the signal is
snoozed, the setting is disabled, the extension stops, or Auralis settings are
reset. It never writes editor text or leaves a decoration behind.

Click the Auralis status entry (or run `Auralis: Show Environment Status`) to
see exactly which local signal matched and open the relevant settings.
The entry is absent while idle by default. If you explicitly enable
`auralis.environmentGuard.showWhenSafe`, Guard may show a neutral `safe`
shield while it is enabled and no risky signal is present.
