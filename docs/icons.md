<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# File and Product Icons

Auralis ships both a file icon theme and a product icon theme.

## File Icons

File icons cover common frontend, backend, infrastructure, data, and configuration files, including TypeScript, React, Rust, Go, Python, Terraform, Docker, Kubernetes, Prisma, GraphQL, Svelte, Vue, Astro, Vite, Next.js, Tailwind, GitHub Actions, and common package manager files.

The expanded 0.2.12 set adds stronger coverage for:

- Cloud and infra: AWS, Azure, GCP, Serverless, SAM, Pulumi, Helm, Kustomize, Skaffold, Terraform, Terragrunt, and `.terraform.lock.hcl`.
- CI/CD: GitHub Actions, GitLab CI, Azure Pipelines, Cloud Build, Jenkins, CircleCI-style config, Makefile, Taskfile, and justfile.
- Language ecosystems: Cargo, Go modules, Python project files, TypeScript/JavaScript config, package workspaces, and monorepo manifests.
- Security and ownership: `SECURITY.md`, `CODEOWNERS`, Snyk, Trivy, Semgrep, Rego policy, key/cert files, and common secrets files.
- Project structure: cloud, clusters, charts, environments, overlays, services, packages, migrations, database, policies, security, and secrets folders.

Run:

```text
Auralis: Enable File Icons
```

## Product Icons

Product icons restyle VS Code's built-in UI glyphs such as Explorer, Search, Source Control, Run, Testing, Chat, Notebooks, Extensions, Problems, Ports, folding controls, breakpoints, and diff actions. Auralis uses a bespoke single-color glyph font generated from original Auralis SVG geometry, shipped WOFF-first with TTF fallback.

Run:

```text
Auralis: Enable Product Icons
```

## Sync

Run:

```text
Auralis: Sync Icons With Active Theme
```

This keeps Auralis file icons and product icons paired with the active Auralis color theme. The command is also useful after switching from another theme.
