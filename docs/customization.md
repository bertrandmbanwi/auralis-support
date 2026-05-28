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
