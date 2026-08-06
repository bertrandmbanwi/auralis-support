<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Tooling Setup

Syntalume can configure a polished formatter and linter setup without bundling heavy tooling into the theme.

The setup commands write normal VS Code settings. They do not install Terraform, TFLint, Prettier, ESLint, or Better Comments unless you explicitly choose to install a missing companion extension from the prompt.

## Opt-In Safety

Tooling setup is designed to be safe and reversible:

- **Detect before overwrite.** Syntalume checks whether you already have a default formatter for a language before setting one. If you have already chosen a formatter, Syntalume leaves it alone.
- **Prefer Workspace scope.** When a folder is open, tooling settings are written to the current workspace rather than your global user settings, so each project keeps its own setup.
- **Confirm before format-on-save.** Syntalume asks before enabling format-on-save. Choose `Skip` to keep saving untouched and format manually. Nothing is turned on silently.
- **Skip unregistered settings.** If a companion extension is not installed yet, Syntalume skips its settings and tells you which ones were deferred until that extension registers them, instead of throwing an error.
- **Apply atomically and reset exactly.** Each setup command commits its registered settings as one transaction and rolls them back if a write fails. Syntalume keeps separate User and Workspace baselines; `Syntalume: Reset Syntalume Settings` restores only values and individual object keys that still match its last write. Later manual edits and unrelated file associations or language settings always win.
- **Unwind features together.** If a profile, icon command, or another Syntalume feature later changes one of the same settings, General Reset follows their local application order instead of treating the intermediate Syntalume value as your original baseline.

For a guided view, run:

```text
Syntalume: Open Setup Dashboard
```

The dashboard shows active theme/icon status, git decoration visibility, formatter readiness, and companion extension availability.

## Terraform

Run:

```text
Syntalume: Setup Terraform Tooling
```

This applies:

- Terraform file associations for `.tf`, `.tfvars`, `.tfstate`, and `.hcl`.
- `HashiCorp.terraform` as the default formatter for Terraform, Terraform variables, and HCL, only when you have not already chosen a default formatter for those languages.
- Format on save for Terraform-related language IDs, only if you confirm it.
- Two-space indentation for Terraform/HCL.
- Bracket pair colorization, active bracket guides, and semantic highlighting.

Recommended companion extension:

- `HashiCorp.terraform`

Optional CLI:

- `terraform`
- `tflint`

Syntalume Doctor checks whether these commands are available on your `PATH`, but it does not run Terraform or TFLint automatically.

## YAML and Kubernetes

Run:

```text
Syntalume: Setup YAML and Kubernetes Tooling
```

This applies:

- YAML file associations for `.yaml`, `.yml`, GitHub Actions workflows, `k8s`, and `kubernetes` folders.
- `esbenp.prettier-vscode` as the default formatter for YAML, only when you have not already chosen a default YAML formatter.
- Two-space indentation for YAML, and format on save only if you confirm it.
- Red Hat YAML language-server settings for validation, hover, completion, formatting, and Schema Store support.
- Bracket pair colorization, active bracket guides, and semantic highlighting.

Recommended companion extensions:

- `redhat.vscode-yaml`
- `esbenp.prettier-vscode`

YAML linting should come from your project or CI when stricter rules are needed. Syntalume keeps this lightweight and does not bundle a YAML linter.

## Web

Run:

```text
Syntalume: Setup Web Tooling
```

This applies:

- `esbenp.prettier-vscode` as the default formatter for JavaScript, TypeScript, JSON, CSS, HTML, Markdown, MDX, and YAML, only where you have not already set a default formatter.
- Format on save for common web file types, only if you confirm it.
- ESLint fix-on-save for JavaScript and TypeScript on explicit saves, only when you confirm format on save.
- ESLint working directory auto-detection.

Recommended companion extensions:

- `esbenp.prettier-vscode`
- `dbaeumer.vscode-eslint`

Optional CLIs:

- `prettier`
- `eslint`

Project-local npm tools are fine. A global CLI is not required if your project already manages formatting and linting through `node_modules`.

## Better Comments

Run:

```text
Syntalume: Configure Better Comments
```

This applies Syntalume-colored tags for:

- `!`
- `?`
- `TODO`
- `SECURITY`
- `COST`
- `DRIFT`
- `DEBT`
- `BREAKING`
- `*`

Recommended companion extension:

- `aaron-bond.better-comments`

## Brackets

Run:

```text
Syntalume: Apply Bracket Style
```

Available styles:

- `Syntalume Active Guides`
- `Syntalume Full Guides`
- `Syntalume Color Only`
- `Off`

You can also use:

```text
Syntalume: Toggle Bracket Pair Colorization
Syntalume: Toggle Active Bracket Guides
```

## Doctor

Run:

```text
Syntalume: Run Doctor (Check Setup)
```

Desktop VS Code checks:

- Active Syntalume theme and icon settings.
- Companion extension installation state.
- Whether `terraform`, `tflint`, `prettier`, and `eslint` are available on `PATH`.
- Formatter settings for Terraform, HCL, YAML, and common web languages.

The CLI availability checks run only when the workspace is trusted. In an untrusted workspace Doctor still reports settings and extension state, but skips spawning the `terraform`, `tflint`, `prettier`, and `eslint` checks and tells you to trust the workspace to run them.

Browser VS Code skips CLI checks and only reports settings and extension availability.
