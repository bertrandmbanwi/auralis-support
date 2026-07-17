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

Enter an accent color as a hex value (for example `#5cc8a0`). Auralis checks that it reaches at least 3:1 contrast against both the dark and light Auralis backgrounds before applying it, and writes a small set of `workbench.colorCustomizations` (focus border, activity bar active border, and related accents) on your behalf. Leave the field empty to restore the prior accent. Every color is owned independently, so a later manual edit to one key wins without stranding the others; unrelated keys are never replaced. Apply/restore is transactional and writes to the scope chosen by `auralis.profiles.scope`. If VS Code rejects part of a rollback, Auralis retains recovery ownership so clearing the accent can safely retry the exact restore.

The `auralis.cognitiveContrast.aiSurfaces` setting tunes the legibility of AI surfaces such as ghost text. `subtle` dims generated text, `prominent` strengthens it, and `balanced` (default) leaves the theme default. Customizing the accent also applies this preference.

## Reset Auralis Settings

Run:

```text
Auralis: Reset Auralis Settings
```

After confirmation, this exact-restores tracked Complete Experience, tooling,
theme/icon command, Tune, Accessibility Lab, Icon Studio, Customize Accent,
Project Theme, Auralis Type, Environment Guard tint, and previous-look values.
Each surface restores only values or individual object keys that still match
its ownership fingerprint; prior values, later manual edits, and unrelated
additions win. User and Workspace histories stay separate.

General Reset also keeps a local cross-feature application history. If, for
example, Icon Studio, a profile, Type, Tune, or Accessibility later writes a
setting another Auralis feature already owns, Reset unwinds those layers in
reverse application order to the true pre-Auralis value. An individual
feature reset removes its own history, so a later manual value—even one equal
to an old Auralis value—is never mistaken for stale ownership.

That local history stores changed paths rather than duplicate setting roots
and is bounded per scope to 512 transitions/guards or 256 KiB. If either limit
is reached, the new Auralis apply fails and rolls its setting transaction back;
it never evicts the older baseline needed for an exact reset.

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
