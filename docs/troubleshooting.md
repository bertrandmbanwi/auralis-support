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

If you used desktop Icon Studio, confirm `Auralis Icons – Studio (Desktop)` is
the active file-icon theme. Apply switches through a shipped Auralis theme and
back automatically so Explorer reloads the generated manifest. If Apply reports
that the installation is read-only, reinstall Auralis in your normal User
extensions location; no settings are changed by the failed attempt.

On vscode.dev and other web hosts, choose Balanced, Minimal, Outline, or
Pictorial. Arbitrary slider values and custom folder/root/language maps remain
read-only preset previews there because browser extensions cannot update their
packaged contribution files.

## Accessibility Lab cannot read the active theme

Run `Preferences: Color Theme`, select the theme again, and retry:

```text
Auralis: Open Accessibility Lab
```

Some installed themes do not expose a readable JSON contribution to other
extensions. Auralis shows a warning and makes no changes when the active theme
cannot be inspected.

## I want one place to check my setup

Run:

```text
Auralis: Open Setup Dashboard
```

It reports the active theme, icon themes, git decoration visibility (the M/A/U letters and colors next to changed files), formatter settings, companion extensions, and optional ambience settings.

## The git letters (M, A, U) next to changed files are missing

Those letters and file colors come from VS Code's explorer decorations, and Auralis themes color them in every variant. If they are missing, a past setting turned them off. Run `Auralis: Run Doctor (Check Setup)` to confirm, or set these back to true:

```json
{
  "explorer.decorations.badges": true,
  "explorer.decorations.colors": true,
  "git.decorations.enabled": true
}
```

Applying any Auralis Complete Experience profile also restores them.

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

## General Reset says its reset history is damaged

Auralis preserves every current editor setting and clears only its local reset
metadata, so the next Auralis apply starts from the setup you can see. If that
metadata cleanup fails, retry General Reset before applying more Auralis
changes.

## Images are broken on Marketplace

Marketplace images must be public HTTPS URLs. Auralis uses a public asset repository for screenshots while keeping the source repository private.

Public support issues live at:

```text
https://github.com/bertrandmbanwi/auralis-support/issues
```

For a shareable support payload that excludes file paths, project names, source
code, and environment context names, run:

```text
Auralis: Copy Support Diagnostics
```
