<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis 0.2.9 Visual QA

Date: 2026-05-28

## Scope

- Marketplace fresh install from the public extension listing in a clean VS Code profile.
- Local packaged install from `auralis-theme-system-0.2.9.vsix` in a second clean VS Code profile.
- Full visual sample matrix across all eight Auralis themes:
  - `main.tf`
  - `k8s/deployment.yaml`
  - `showcase.tsx`
  - `shader.rs`
  - `README.md`
  - `settings.json`

## Results

- Marketplace `0.2.8` installed correctly from the public listing, but clean Terraform files opened as Plain Text before companion tooling was installed.
- Local `0.2.9` fixed that first-impression issue: `.tf` opened as Terraform, `.yaml` opened as YAML, and the status bar reflected the expected language modes.
- `Auralis: Apply Recommended Experience` applied the full recommended stack and prompted for missing companion extensions: HashiCorp Terraform, Red Hat YAML, Prettier, and ESLint.
- Auralis file icons and product icons rendered across Explorer, Activity Bar, status bar, tabs, notifications, and editor chrome without broken glyphs.
- No blocking contrast or palette issues were found across Noir, Frost, Paper, Botanica, Noir High Contrast, Frost Colorblind, Paper Contrast, and Dimmed.

## Follow-Ups

- Build dedicated Marketplace screenshots from the 0.2.9 state after publishing, especially the fixed Terraform and YAML first-run view.
- Consider a future UX pass that suppresses or works around native VS Code welcome/sign-in clutter through clearer onboarding copy, because those prompts can temporarily obscure Auralis' first-run impact.
- Domain registration is still needed to start the verified-publisher clock.
