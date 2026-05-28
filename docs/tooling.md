# Tooling Setup

Auralis does not bundle formatter or linter engines. It writes normal VS Code settings and uses companion extensions where appropriate.

## Terraform

Run:

```text
Auralis: Setup Terraform Tooling
```

Recommended companion extension:

- HashiCorp Terraform

Optional CLI tools:

- `terraform`
- `tflint`

## YAML and Kubernetes

Run:

```text
Auralis: Setup YAML and Kubernetes Tooling
```

Recommended companion extensions:

- Red Hat YAML
- Prettier

Auralis avoids forcing explicit Kubernetes schemas because those can create noisy or incorrect validation in mixed YAML repositories. Schema support remains available through the YAML extension and schema store.

## Web

Run:

```text
Auralis: Setup Web Tooling
```

Recommended companion extensions:

- Prettier
- ESLint

## Better Comments

Run:

```text
Auralis: Configure Better Comments
```

Useful tags include:

- `TODO`
- `SECURITY`
- `COST`
- `DRIFT`
- `DEBT`
- `BREAKING`

