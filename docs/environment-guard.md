<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Environment Guard

Environment Guard makes the workbench itself tell you when you are pointed at
production. It watches three local signals:

- the kubectl `current-context` in your kubeconfig,
- the Terraform workspace marker (`.terraform/environment`),
- the git branch of each workspace folder.

When a signal matches your production patterns, a red `$(shield) PROD` item
appears in the status bar and (optionally) the status bar or title bar takes a
warning tint. Staging matches get an amber treatment.

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
  "auralis.environmentGuard.prodPatterns": ["prod", "production", "live", "main$", "master$"],
  "auralis.environmentGuard.stagingPatterns": ["stag", "staging", "preprod", "uat", "release"]
}
```

Patterns are case-insensitive regular expressions matched against each signal.
`tint` can be `off`, `statusBar`, or `full` (status bar + title bar). The tint
is written to workspace settings and removed automatically when you leave the
risky context; `Auralis: Reset Auralis Settings` also removes it.

Click the shield (or run `Auralis: Show Environment Status`) to see exactly
which signal matched.
