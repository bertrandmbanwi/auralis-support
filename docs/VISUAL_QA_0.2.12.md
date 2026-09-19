<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Auralis 0.2.12 Visual QA

## Scope

- Automated clean-profile screenshot QA.
- Terraform and YAML/Kubernetes visual tuning.
- Marketplace conversion copy.
- Broader file icon coverage for cloud, infra, CI/CD, language ecosystems, security, and monorepo files.

## Screenshot QA Harness

Run a dry plan:

```bash
npm run qa:screenshots:dry-run
```

Capture the full matrix on macOS:

```bash
npm run package
npm run qa:screenshots
```

The command installs the packaged VSIX into a temporary clean VS Code user-data directory, installs the Terraform/YAML/Rust grammar extensions needed for realistic highlighting, applies Auralis themes/icons through normal settings, opens the sample workspace, and captures:

- 8 color themes.
- Terraform, YAML/Kubernetes, TSX, Rust, Markdown, JSON, terminal, and extension-details targets.
- A `manifest.json` with capture metadata.

The default output is ignored by git under `qa/screenshots/`.

Useful targeted checks:

```bash
npm run qa:screenshots -- --themes botanica,noir --targets terraform,yaml-kubernetes,terminal
npm run qa:screenshots -- --use-marketplace --themes botanica --targets extension-details
npm run qa:screenshots -- --skip-language-extensions --themes botanica --targets markdown,json
```

On macOS the harness defaults to the `Code` app process name. Override with `AURALIS_QA_APP` or `--app` if the local VS Code bundle exposes a different accessibility process name.

## Tuning Notes

- Botanica Terraform now separates block keywords, provider/resource type labels, resource names, attributes, references, strings, numbers, booleans, and URLs with less warm-color collapse.
- Botanica YAML/Kubernetes now gives mapping keys and tags more cyan/teal separation while keeping plain values calm.
- Command Palette, Activity Bar active states, panel sections, list focus outlines, SCM graph colors, and inline edit indicators have additional color coverage for modern VS Code surfaces.
- File icon coverage expanded to cloud, Terraform module conventions, Kubernetes/Helm/Kustomize, CI/CD files, language package manifests, security files, lockfiles, and monorepo folders.

## Release Gate

Before publishing 0.2.12:

1. Run `npm run validate`.
2. Run `npm run package`.
3. Run `npm run qa:screenshots:dry-run`.
4. Capture at least the targeted Botanica/Noir matrix locally.
5. Inspect the full generated screenshot set before the final Marketplace upload.
