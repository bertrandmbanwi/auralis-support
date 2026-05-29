<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Changelog

## 0.2.10

- Added `npm run docs:check` to CI so the public support hub cannot drift from the private source docs before release.
- Cleaned the Terraform sample by defining `var.project_name`, reducing sample diagnostics during first-run QA.
- Updated the Kubernetes/YAML sample image tag to the current 0.2.10 release line.
- Refreshed Marketplace-facing copy to speak more directly to Terraform, Kubernetes/YAML, cloud infrastructure, and long-session users.
- Updated local install references and recorded a 0.2.10 patch QA note.

## 0.2.9

- Added `npm run docs:sync` and `npm run docs:check` so the public `auralis-support` documentation can be refreshed from the private source docs before each release.
- Refreshed stale beta QA, install, and issue-template references for the Auralis naming and 0.2.9 release line.
- Added Markdown and JSON QA samples so the release language matrix covers Terraform, Kubernetes/YAML, TSX, Rust, Markdown, and JSON.
- Added core Terraform/HCL/YAML file associations to Auralis defaults and Complete Experience profiles, and made the recommended infrastructure profile prompt for missing companion extensions.
- Added a domain verification checklist for the paid domain-registration step that must start the Marketplace verified-publisher clock.
- Recorded a fresh Marketplace-install QA pass and visual tuning notes for the 0.2.9 release.

## 0.2.8

- Added the public Auralis support hub at `https://github.com/bertrandmbanwi/auralis-support`.
- Updated Marketplace metadata links for docs, support, and public GitHub presence so users no longer land on private-repo 404s.
- Clarified that the source repo stays private while customer-facing docs, support, privacy, and security notes live publicly.
- Updated local install references for the 0.2.8 VSIX.
- Updated the packaged-file audit to enforce the new public support URLs.

## 0.2.7

- Added `Auralis: Open Setup Dashboard` as a guided, lazy-loaded first-run panel for profiles, icon sync, formatter readiness, companion extension checks, Doctor, docs, and legacy settings cleanup.
- Added Doctor visibility for old `lumenPro.*` settings and Vira-scoped color customizations.
- Moved the Kubernetes visual QA sample to `samples/k8s/deployment.yaml`, avoiding the Rancher/RKE `cluster.yaml` schema trap.
- Added migration cleanup for the pre-release Kubernetes SchemaStore mappings used during local QA, including empty-setting cleanup so setup avoids noisy explicit Kubernetes schema validation.
- Updated local install references for the 0.2.7 VSIX.

## 0.2.6

- Updated release references after the Marketplace 0.2.5 onboarding and YAML tooling polish.
- Refreshed the security note so the current beta licensing statement applies to the whole 0.2.x line.
- Cleaned the Kubernetes/YAML QA sample so its image tag matches the current release track.

## 0.2.5

- Moved `Auralis Botanica: Calm Infra` to the top of the Complete Experience picker and marked it as the recommended first-run profile.
- Hardened optional tooling setup so unregistered companion-extension settings are skipped with a clear message instead of throwing a VS Code error.
- Improved Doctor notifications by naming missing companion extensions directly in the toast.
- Polished command titles so the command palette shows clean `Auralis: ...` entries instead of duplicate `Auralis: Auralis: ...` labels.

## 0.2.4

- Strengthened first-run onboarding with a fuller Getting Started walkthrough that points non-technical users to the recommended profile, infrastructure tooling, icon system, docs, and Doctor.
- Added `Auralis: Setup YAML and Kubernetes Tooling` for YAML file associations, Prettier formatting, Red Hat YAML schema support, two-space indentation, semantic highlighting, and active bracket guides.
- Tuned YAML/Kubernetes highlighting so keys, plain values, quoted strings, booleans, numbers, anchors, aliases, tags, punctuation, and documentation links separate more clearly.
- Added a Kubernetes/GitHub Actions YAML sample for visual QA.

## 0.2.3

- Tuned Terraform/HCL highlighting so block keywords, provider/resource type labels, resource names, variable references, strings, numbers, booleans, URLs, comments, diagnostics, and SCM gutter states separate more clearly.
- Added a dedicated Auralis Product Icons preview image so the bespoke workbench glyph font is visible in the Marketplace listing.
- Added an animated Apply Complete Experience demo asset for the Marketplace README.
- Reworked Marketplace positioning around Terraform, cloud infrastructure, React, Rust, first-run setup, and the free public beta.

## 0.2.2

- Added optional setup commands for Terraform formatting, web formatting/linting, and Better Comments tags.
- Added `Auralis: Doctor` to check active Auralis settings, companion extensions, and desktop CLI availability for Terraform, TFLint, Prettier, and ESLint.
- Added bracket utility commands for pair colorization, active guides, and bracket style presets.
- Kept tooling optional and lightweight: Auralis writes VS Code settings and prompts for companion extensions, but does not bundle formatter or linter engines.

## 0.2.1

- Added a first-install Getting Started walkthrough with one-click setup for `Auralis Botanica: Calm Infra`.
- Added `Auralis: Apply Recommended Experience` for a fast, non-technical first run.
- Added declarative default theme/icon values for users who have not already chosen their own VS Code theme settings.
- Refined Botanica Terraform/HCL syntax separation so attributes, references, strings, labels, operators, and comments read more distinctly.

## 0.2.0

- Added web extension support through `browser.js` so browser VS Code environments can use Auralis themes, icons, and profiles without Node-only runtime code.
- Added Workspace Trust and virtual workspace guardrails for local git-based Blame Ghosts.
- Added accessibility variants: Auralis Noir High Contrast, Auralis Frost Colorblind, Auralis Paper Contrast, and Auralis Dimmed.
- Added profile upgrades: Review Lens, Terminal Heavy, and AI Pairing.
- Added `Auralis: Sync Icons With Active Theme`, `Auralis: Enter Review Mode`, and `Auralis: Open Documentation`.
- Expanded file icon associations for modern frontend, backend, infrastructure, data, and config workflows.
- Added contrast auditing to `npm run validate`.
- Added customer-facing help docs and a monetization plan for a future free-trial-to-paid model.

## 0.1.3

- Added `SECURITY.md` with the extension security model and vulnerability reporting guidance.
- Added a package audit script that blocks source-only files, private folders, credentials, and common secret patterns from the VSIX file list.
- Added dependency audit and package audit checks to CI.
- Clarified the proprietary all-rights-reserved license and the Codicons notice boundary.
- Documented security, publisher identity, and defensibility strategy for `Bertrand Mbanwi · Auralis`.

## 0.1.2

- Removed startup activation so theme, file icon, and product icon usage stays declarative until an Auralis command runs.
- Added Auralis Product Icons and an `Auralis: Enable Product Icons` command.
- Added `Auralis: Apply Complete Experience` profiles for Noir, Frost, Paper, and Botanica.
- Hardened Focus Field, Edit Heatmap, and Blame Ghosts with visible-range focus shading, capped edit heat storage, age/count heat buckets, and debounced cached git blame.
- Expanded modern VS Code surface colors for chat, notebooks, testing, debug, charts, extension details, merge editor, comments, ports, keybindings, and related UI.
- Deepened TextMate and semantic token coverage for TypeScript/React, Rust, Python, Go, Terraform/HCL, YAML/JSON, Markdown/MDX, and Docker.
- Added performance and publisher verification docs.

## 0.1.1

- Fixed Marketplace README preview images by moving screenshot references to public HTTPS asset URLs.
- Kept the source repository private while exposing only the published preview PNGs.

## 0.1.0

- Initial Auralis extension structure.
- Added four generated color themes: Auralis Noir, Auralis Frost, Auralis Paper, and Auralis Botanica.
- Added generated SVG file icon theme.
- Added optional Focus Field, Blame Ghosts, and Edit Heatmap commands.
- Added validation script for generated theme and icon assets.
- Tuned subtle UI text, active line number contrast, editor widgets, menus, scrollbars, and settings surfaces after first VS Code visual QA.
- Added generated Marketplace icon, GitHub CI, issue templates, PR template, Dependabot, beta QA checklist, and release checklist.
- Added generated Marketplace preview images and wired them into the README.
