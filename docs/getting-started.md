<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Getting Started

## VS Code Marketplace

1. Open VS Code.
2. Open Extensions.
3. Search for `Syntalume — Adaptive Themes & Icons`.
4. Install the extension with ID `auralis-labs.auralis-theme-system`.

Canonical listing:

- https://marketplace.visualstudio.com/items?itemName=auralis-labs.auralis-theme-system

The publisher ID and extension ID are the durable identity. Use them to avoid
confusing Syntalume with similarly named extensions.

## Open VSX and VS Code-compatible editors

Syntalume is also published under the same publisher and extension IDs on Open
VSX:

- https://open-vsx.org/extension/auralis-labs/auralis-theme-system

Use that listing for editors whose built-in extension browser uses Open VSX.
The release workflow verifies the canonical registry version after publishing;
search-engine result pages are not used as release evidence.

## JetBrains IDEs

The public, approved Syntalume Theme listing for JetBrains IDEs is:

- https://plugins.jetbrains.com/plugin/32762-auralis-theme

The standalone theme plugin carries all nine palettes, editor schemes,
Islands-aware surfaces, and Syntalume icon substitutions without bundling
behavioral runtime features. Syntalume Companion is a separate optional plugin
for shared profiles, project identity, Rhythm, and Environment Guard; keeping
the two products separate means users who want only a theme install only a
theme. Its shared-profile review can also apply supported comfort, syntax,
bracket, and density choices through a separately owned editor scheme; every
change is previewed first, and unsupported Look and Feel fields are identified
without approximation.

## Local VSIX

```bash
npm run package
code --install-extension auralis-theme-system-*.vsix --force
```

Reload VS Code after installing a local package.

## Installation Is Non-Intrusive

Installing Syntalume does not change anything on its own. Your color theme, file icons, and editor settings stay exactly as they were until you choose to adopt the Syntalume experience. To apply it, run:

```text
Syntalume: Apply Recommended Experience
```

or use the walkthrough buttons or the Setup Dashboard. Every write is a normal,
visible VS Code setting. Ownership-aware surfaces such as Complete Experience,
tooling, theme/icon commands, Tune, Icon Studio, project/accent customization,
and Syntalume Type restore only their unchanged writes or individually owned
object keys; later manual edits and unrelated additions win.

## First Setup

After Marketplace install, VS Code opens the Syntalume Getting Started walkthrough. Run:

```text
Syntalume: Open Setup Dashboard
```

for the guided first run. The dashboard shows whether the color theme, file icons, product icons, formatter settings, companion extensions, and old settings are in a healthy state.

You can also run:

```text
Syntalume: Apply Recommended Experience
```

for the fastest first run. It applies Syntalume Botanica, file icons, product icons, bracket guides, semantic highlighting, and the balanced infrastructure profile.

To pick a different profile, run:

```text
Syntalume: Apply Complete Experience
```

Choose the profile closest to how you work. Syntalume applies the color theme, file icons, product icons, bracket guides, minimap behavior, semantic highlighting, and optional ambience settings together.

For infrastructure projects, also run:

```text
Syntalume: Setup Terraform Tooling
Syntalume: Setup YAML and Kubernetes Tooling
Syntalume: Run Doctor (Check Setup)
```

These commands write normal VS Code settings and offer companion extensions. They do not bundle Terraform, TFLint, Prettier, ESLint, or the Red Hat YAML language server.
