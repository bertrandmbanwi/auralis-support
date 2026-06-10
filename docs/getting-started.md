<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Getting Started

## Marketplace

1. Open VS Code.
2. Open Extensions.
3. Search for `Auralis`.
4. Install the extension from publisher `Bertrand Mbanwi · Auralis`.

## Local VSIX

```bash
npm run package
code --install-extension auralis-theme-system-0.4.0.vsix --force
```

Reload VS Code after installing a local package.

## Installation Is Non-Intrusive

Installing Auralis does not change anything on its own. Your color theme, file icons, and editor settings stay exactly as they were until you choose to adopt the Auralis experience. To apply it, run:

```text
Auralis: Apply Recommended Experience
```

or use the walkthrough buttons or the Setup Dashboard. Everything Auralis writes is a normal VS Code setting, and `Auralis: Reset Auralis Settings` clears the settings Auralis owns whenever you want.

## First Setup

After Marketplace install, VS Code opens the Auralis Getting Started walkthrough. Run:

```text
Auralis: Open Setup Dashboard
```

for the guided first run. The dashboard shows whether the color theme, file icons, product icons, formatter settings, companion extensions, and old settings are in a healthy state.

You can also run:

```text
Auralis: Apply Recommended Experience
```

for the fastest first run. It applies Auralis Botanica, file icons, product icons, bracket guides, semantic highlighting, and the balanced infrastructure profile.

To pick a different profile, run:

```text
Auralis: Apply Complete Experience
```

Choose the profile closest to how you work. Auralis applies the color theme, file icons, product icons, bracket guides, minimap behavior, semantic highlighting, and optional ambience settings together.

For infrastructure projects, also run:

```text
Auralis: Setup Terraform Tooling
Auralis: Setup YAML and Kubernetes Tooling
Auralis: Run Doctor (Check Setup)
```

These commands write normal VS Code settings and offer companion extensions. They do not bundle Terraform, TFLint, Prettier, ESLint, or the Red Hat YAML language server.
