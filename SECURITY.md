<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Security Policy

## Supported Versions

Security fixes are handled for the current Marketplace release of Auralis.

## Reporting A Vulnerability

Do not open a public issue for suspected vulnerabilities. Use the Visual Studio Marketplace publisher contact path for `Bertrand Mbanwi · Auralis`.

Please include:

- Affected Auralis version.
- VS Code version and operating system.
- Steps to reproduce.
- Whether an Auralis optional ambience feature was enabled.
- Any relevant logs that do not contain secrets.

## Security Model

Auralis is designed to keep the default theme path low risk:

- Color themes, file icons, and product icons are declarative VS Code contributions.
- The extension does not activate on startup.
- The extension does not include telemetry.
- The extension does not make remote network requests.
- Optional ambience features run only after an Auralis command/profile enables them.
- Browser VS Code environments use a web-safe runtime without Node-only process APIs.
- `Auralis: Toggle Blame Ghosts` is disabled in untrusted or virtual workspaces and uses local `git blame` through `execFile`, never through shell string execution.
- Auralis `0.2.x` does not enforce paid licensing and does not call a license server.

## User Guidance

- Install Auralis only from the official `auralis-labs.auralis-theme-system` Marketplace listing.
- Keep VS Code and Auralis updated.
- Use the public support hub for non-sensitive bugs and docs issues: `https://github.com/bertrandmbanwi/auralis-support`.
- Review any extension claiming to be an Auralis fork or modified build carefully.
