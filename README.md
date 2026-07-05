<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Support

Public docs and support hub for **Auralis**, the VS Code theme system published by **Bertrand Mbanwi · Auralis** under the Marketplace publisher ID `auralis-labs`.

Auralis is built for Terraform, Kubernetes/YAML, cloud infrastructure, React, Rust, AI-assisted work, code review, terminals, and long deep-work sessions.

## Install

Install from the official Visual Studio Marketplace listing:

- [Auralis on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=auralis-labs.auralis-theme-system)
- Website: [auralislab.dev](https://auralislab.dev)

After installing, run:

```text
Auralis: Open Setup Dashboard
```

For the fastest first run, choose:

```text
Auralis: Apply Recommended Experience
```

## Guides

- [Getting Started](docs/getting-started.md)
- [Themes and Profiles](docs/profiles.md)
- [File and Product Icons](docs/icons.md)
- [Rhythm — Scheduled Themes](docs/rhythm.md)
- [Environment Guard](docs/environment-guard.md)
- [Auralis Tune and Calibration](docs/tune.md)
- [Review Sessions and Edit Provenance](docs/review-sessions.md)
- [Team Profiles](docs/team-profiles.md)
- [Export Terminal Theme](docs/terminal-export.md)
- [Tooling Setup](docs/tooling.md)
- [Ambience Features](docs/ambience.md)
- [Customization](docs/customization.md)
- [Performance and Privacy](docs/performance-privacy.md)
- [Troubleshooting](docs/troubleshooting.md)
- [0.2.12 Visual QA](docs/VISUAL_QA_0.2.12.md)
- [Publisher Verification](docs/verification.md)
- [Domain Verification Checklist](docs/DOMAIN_VERIFICATION_CHECKLIST.md)
- [Azure DevOps Account Path](docs/AZURE_DEVOPS_ACCOUNT_PATH.md)

## Terminal Ports

Generated terminal palettes for every Auralis theme — iTerm2, Windows
Terminal, Alacritty, WezTerm, Ghostty, and Warp — live in [ports/](ports/).
Inside VS Code, `Auralis: Export Terminal Theme` produces the same files.

## Support

- Use [GitHub Issues](https://github.com/bertrandmbanwi/auralis-support/issues) for bugs, install problems, docs issues, and feature requests.
- Include your Auralis version, VS Code version, operating system, active theme/profile, and the output of `Auralis: Doctor` when useful.

## Source Boundary

The Auralis product source is private during beta. This repository is public so Marketplace users have a reliable docs and support surface without exposing proprietary theme source, generated assets, or future licensing work.

## Security And Privacy

Auralis has no startup activation, no telemetry, no background network calls, and no secret reads. Optional local features run only after an Auralis command/profile enables them.

- [Security Policy](SECURITY.md)
- [Privacy Notes](PRIVACY.md)
