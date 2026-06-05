<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Customization

## Recommended Settings

Use Complete Experience profiles first, then tune from there.

```text
Auralis: Apply Complete Experience
```

Useful settings:

- `workbench.colorTheme`
- `workbench.iconTheme`
- `workbench.productIconTheme`
- `editor.semanticHighlighting.enabled`
- `editor.bracketPairColorization.enabled`
- `editor.guides.bracketPairs`
- `editor.inlayHints.enabled`
- `editor.minimap.enabled`

## Customize Accent & Overrides

Run:

```text
Auralis: Customize Accent & Overrides
```

Enter an accent color as a hex value (for example `#5cc8a0`). Auralis checks that it reaches at least 3:1 contrast against both the dark and light Auralis backgrounds before applying it, and writes a small set of `workbench.colorCustomizations` (focus border, activity bar active border, and related accents) on your behalf. Leave the field empty to clear the Auralis accent. This command writes to the scope chosen by `auralis.profiles.scope`.

The `auralis.cognitiveContrast.aiSurfaces` setting tunes the legibility of AI surfaces such as ghost text. `subtle` dims generated text, `prominent` strengthens it, and `balanced` (default) leaves the theme default. Customizing the accent also applies this preference.

## Reset Auralis Settings

Run:

```text
Auralis: Reset Auralis Settings
```

This clears the `auralis.*` namespace plus the editor, diff, SCM, and terminal settings Auralis writes, at both User and Workspace scope, after a confirmation. Your color theme, file icons, and product icons are left as they are; use `Auralis: Switch Theme Variant` to change them.

## Ambience Controls

Disable profile-driven ambience without losing the profile settings:

```json
{
  "auralis.profiles.includeAmbience": false
}
```

Keep Auralis icons paired with Auralis themes:

```json
{
  "auralis.icons.syncWithTheme": true
}
```

Allow Review Lens to enable Blame Ghosts automatically in trusted local workspaces:

```json
{
  "auralis.reviewLens.enableBlameGhosts": true
}
```

## Fonts

Auralis works with any editor font. For the intended feel, use a modern coding font with ligatures available, then let the profile enable `editor.fontLigatures`.
