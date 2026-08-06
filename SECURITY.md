<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Security Policy

## Supported Versions

Security fixes are handled for the current Marketplace release of Syntalume.

## Reporting A Vulnerability

Do not open a public issue for suspected vulnerabilities. Use the Visual Studio Marketplace publisher contact path for `Bertrand Mbanwi · Syntalume`.

Please include:

- Affected Syntalume version.
- VS Code version and operating system.
- Steps to reproduce.
- Whether an Syntalume optional ambience feature was enabled.
- Any relevant logs that do not contain secrets.

## Security Model

Syntalume is designed to keep the default theme path low risk:

- Color themes, file icons, and product icons are declarative VS Code contributions.
- The small runtime activates only after the workbench finishes starting
  (`onStartupFinished`); declarative themes and icons do not wait for it, and
  bounded performance checks gate every release.
- The extension does not include telemetry.
- The extension does not make remote network requests.
- Optional ambience features run only after an Syntalume command/profile enables them.
- Optional usage counters store only fixed aggregate counts in VS Code local
  extension storage. Users can disable and clear them; they are never sent.
- Diagnostics and feedback are user-initiated, sanitized previews. Syntalume
  never submits a report or opens a review prompt automatically.
- Browser VS Code environments use a web-safe runtime without Node-only process APIs.
- `Syntalume: Toggle Blame Ghosts` is disabled in untrusted or virtual workspaces and uses local `git blame` through `execFile`, never through shell string execution.
- The current public beta remains fully unlocked. Signed license checks are
  offline, and Syntalume does not call a license server.

## User Guidance

- Install Syntalume only from the official `auralis-labs.auralis-theme-system` Marketplace listing.
- Keep VS Code and Syntalume updated.
- Use the public support hub for non-sensitive bugs and docs issues: `https://github.com/bertrandmbanwi/auralis-support`.
- Review any extension claiming to be an Syntalume fork or modified build carefully.
