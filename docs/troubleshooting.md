# Troubleshooting

## I Installed Auralis But Nothing Changed

Run:

```text
Auralis: Open Setup Dashboard
```

Then choose the recommended experience.

You can also run:

```text
Auralis: Apply Recommended Experience
```

## I Do Not See File Icons Or Product Icons

Run:

```text
Auralis: Sync Icons With Active Theme
```

Or choose these manually:

- File Icon Theme: `Auralis Icons`
- Product Icon Theme: `Auralis Product Icons`

## Terraform, YAML, Or Web Formatting Is Not Working

Run:

```text
Auralis: Doctor
```

Then run the matching setup command:

- `Auralis: Setup Terraform Tooling`
- `Auralis: Setup YAML and Kubernetes Tooling`
- `Auralis: Setup Web Tooling`

## YAML Shows The Wrong Schema

Run:

```text
Auralis: Setup YAML and Kubernetes Tooling
```

Auralis removes older pre-release Kubernetes schema mappings that could cause noisy validation.

## Marketplace Says Publisher Not Verified

That is expected during beta. Microsoft requires publisher and domain-age milestones before verification can be approved.

See [Publisher Verification](verification.md).

