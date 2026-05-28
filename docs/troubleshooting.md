<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Troubleshooting

## I installed Auralis but do not see the themes

Run:

```text
Preferences: Color Theme
```

Search for `Auralis`.

## Icons did not change

Run:

```text
Auralis: Sync Icons With Active Theme
```

Then reload VS Code if the Extensions view asks for it.

## I want one place to check my setup

Run:

```text
Auralis: Open Setup Dashboard
```

It reports the active theme, icon themes, formatter settings, companion extensions, optional ambience settings, and old Lumen settings that can be cleaned safely.

## Blame Ghosts does not show anything

Check that:

- The workspace is trusted.
- The file is saved and not dirty.
- The file is inside a local git repository.
- `git` is available on your PATH.
- `auralis.blameGhosts.enabled` is true.

## A profile changed too many editor settings

Profiles write normal VS Code settings. Open Settings JSON and adjust the settings you do not want. To stop profiles from toggling ambience:

```json
{
  "auralis.profiles.includeAmbience": false
}
```

## Images are broken on Marketplace

Marketplace images must be public HTTPS URLs. Auralis uses a public asset repository for screenshots while keeping the source repository private.

Public support issues live at:

```text
https://github.com/bertrandmbanwi/auralis-support/issues
```
