<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Syntalume Support

Public docs and support hub for **Syntalume — Adaptive Themes & Icons** (formerly Auralis), published under the Marketplace publisher ID `auralis-labs`.

> **Syntalume is the new name for Auralis** — same product, same themes, same listing, same update path. Existing installs upgrade in place and keep every setting.

Syntalume is built for Terraform, Kubernetes/YAML, cloud infrastructure, React, Rust, AI-assisted work, code review, terminals, and long deep-work sessions.

## Install

Install from the official Visual Studio Marketplace listing:

- [Syntalume on the VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=auralis-labs.auralis-theme-system)
- [Open VSX](https://open-vsx.org/extension/auralis-labs/auralis-theme-system)
- [Syntalume Theme on JetBrains Marketplace](https://plugins.jetbrains.com/plugin/32762-auralis-theme)
- Website: [syntalume.dev](https://syntalume.dev)

After installing, run:

```text
Syntalume: Open Setup Dashboard
```

For the fastest first run, choose:

```text
Syntalume: Apply Recommended Experience
```

## Guides

- [Getting Started](docs/getting-started.md)
- [Themes and Profiles](docs/profiles.md)
- [File and Product Icons](docs/icons.md)
- [Rhythm — Scheduled Themes](docs/rhythm.md)
- [Environment Guard](docs/environment-guard.md)
- [Syntalume Tune and Calibration](docs/tune.md)
- [Syntalume Icon Studio](docs/icon-studio.md)
- [Accessibility Lab](docs/accessibility-lab.md)
- [Review Sessions and Edit Provenance](docs/review-sessions.md)
- [Team Profiles](docs/team-profiles.md)
- [Export Terminal Theme](docs/terminal-export.md)
- [Project Themes & Accents](docs/project-theming.md)
- [Syntalume Type — Font Pairings](docs/type.md)
- [Porting Syntalume](docs/porting.md)
- [Tooling Setup](docs/tooling.md)
- [Ambience Features](docs/ambience.md)
- [Customization](docs/customization.md)
- [Performance and Privacy](docs/performance-privacy.md)
- [Diagnostics, Feedback, and Reviews](docs/support-feedback.md)
- [Localization](docs/localization.md)
- [Fork and Browser QA](docs/FORK_QA.md)
- [Visual Contract](docs/VISUAL_CONTRACT.md)
- [Troubleshooting](docs/troubleshooting.md)
- [0.2.12 Visual QA](docs/VISUAL_QA_0.2.12.md)
- [Publisher Verification](docs/verification.md)
- [Domain Verification Checklist](docs/DOMAIN_VERIFICATION_CHECKLIST.md)
- [Azure DevOps Account Path](docs/AZURE_DEVOPS_ACCOUNT_PATH.md)

## Terminal Ports

Generated terminal palettes for every Syntalume theme — iTerm2, Windows
Terminal, Alacritty, WezTerm, Ghostty, and Warp — live in [ports/](ports/).
Inside VS Code, `Syntalume: Export Terminal Theme` produces the same files.
Porting Syntalume to another app? Palettes: [ports/palettes.json](ports/palettes.json)
— guide: [docs/porting.md](docs/porting.md).

For Shiki, documentation tooling, and verified community ports, the generated
public package source is available at [packages/auralis-palettes/](packages/auralis-palettes/).
It is not yet published to npm; its first release will be announced here and
published with npm trusted-publisher provenance.

## Support

- Use [GitHub Issues](https://github.com/bertrandmbanwi/auralis-support/issues) for bugs, install problems, docs issues, and feature requests.
- Include your Syntalume version, VS Code version, operating system, active theme/profile, and the output of `Syntalume: Doctor` when useful.

## Source Boundary

The Syntalume product source is private during beta. This repository is public so users have a reliable docs, schemas, generated palette data, and support surface. A public palette package and contribution kit make cross-tool ports independently verifiable without exposing proprietary runtime source.

## Security And Privacy

Syntalume uses a small lazy runtime after startup, has no passive telemetry or background network calls, and never reads project secrets. Optional local features run only after a Syntalume command/profile enables them.

- [Security Policy](SECURITY.md)
- [Privacy Notes](PRIVACY.md)
