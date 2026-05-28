<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Tooling Setup

Auralis can configure a polished formatter and linter setup without bundling heavy tooling into the theme.

The setup commands write normal VS Code settings. They do not install Terraform, TFLint, Prettier, ESLint, or Better Comments unless you explicitly choose to install a missing companion extension from the prompt.

For a guided view, run:

```text
Auralis: Open Setup Dashboard
```

The dashboard shows active theme/icon status, formatter readiness, companion extension availability, and legacy Auralis/Lumen settings hygiene.

## Terraform

Run:

```text
Auralis: Setup Terraform Tooling
```

This applies:

- Terraform file associations for `.tf`, `.tfvars`, `.tfstate`, and `.hcl`.
- `HashiCorp.terraform` as the default formatter for Terraform, Terraform variables, and HCL.
- Format on save for Terraform-related language IDs.
- Two-space indentation for Terraform/HCL.
- Bracket pair colorization, active bracket guides, and semantic highlighting.

Recommended companion extension:

- `HashiCorp.terraform`

Optional CLI:

- `terraform`
- `tflint`

Auralis Doctor checks whether these commands are available on your `PATH`, but it does not run Terraform or TFLint automatically.

## YAML and Kubernetes

Run:

```text
Auralis: Setup YAML and Kubernetes Tooling
```

This applies:

- YAML file associations for `.yaml`, `.yml`, GitHub Actions workflows, `k8s`, and `kubernetes` folders.
- `esbenp.prettier-vscode` as the default formatter for YAML.
- Format on save and two-space indentation for YAML.
- Red Hat YAML language-server settings for validation, hover, completion, formatting, and Schema Store support.
- Bracket pair colorization, active bracket guides, and semantic highlighting.

Recommended companion extensions:

- `redhat.vscode-yaml`
- `esbenp.prettier-vscode`

YAML linting should come from your project or CI when stricter rules are needed. Auralis keeps this lightweight and does not bundle a YAML linter.

## Web

Run:

```text
Auralis: Setup Web Tooling
```

This applies:

- `esbenp.prettier-vscode` as the default formatter for JavaScript, TypeScript, JSON, CSS, HTML, Markdown, MDX, and YAML.
- Format on save for common web file types.
- ESLint fix-on-save for JavaScript and TypeScript on explicit saves.
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
Auralis: Configure Better Comments
```

This applies Auralis-colored tags for:

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
Auralis: Apply Bracket Style
```

Available styles:

- `Auralis Active Guides`
- `Auralis Full Guides`
- `Auralis Color Only`
- `Off`

You can also use:

```text
Auralis: Toggle Bracket Pair Colorization
Auralis: Toggle Active Bracket Guides
```

## Doctor

Run:

```text
Auralis: Doctor
```

Desktop VS Code checks:

- Active Auralis theme and icon settings.
- Companion extension installation state.
- Whether `terraform`, `tflint`, `prettier`, and `eslint` are available on `PATH`.
- Formatter settings for Terraform, HCL, YAML, and common web languages.

Browser VS Code skips CLI checks and only reports settings and extension availability.
