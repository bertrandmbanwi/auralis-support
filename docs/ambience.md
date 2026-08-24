<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Ambience Features

Syntalume ambience features are optional editor decorations. They are off by default unless a profile or toggle enables them.

The runtime activates after VS Code's primary startup path
(`onStartupFinished`). Its bounded activation registers commands, listeners,
and the optional status entry; the release suite measures that real path.
Ambience decorations themselves stay lazy while every ambience setting is off.
When you enable one, your choice is saved as a normal setting, so enabled
ambience comes back exactly as you left it after a restart.

The three Toggle commands are tracked as Syntalume-owned changes. General Reset
returns their enabled settings to the values they had before the commands;
later manual edits in Settings still win.

## Focus Field

Focus Field subtly shades visible lines away from the cursor. It only decorates visible editor ranges so large files stay responsive.

```text
Syntalume: Toggle Focus Field
```

Settings:

- `auralis.focusField.enabled`
- `auralis.focusField.radius`
- `auralis.focusField.intensity`

## Edit Heatmap

Edit Heatmap tracks current-session edits and shows subtle line and overview ruler heat. It caps files, lines, and age so memory stays bounded.

```text
Syntalume: Toggle Edit Heatmap
Syntalume: Clear Edit Heatmap
```

Settings:

- `auralis.editHeatmap.enabled`
- `auralis.editHeatmap.maxAgeMinutes`
- `auralis.editHeatmap.maxLinesPerFile`
- `auralis.editHeatmap.maxFiles`

## Blame Ghosts

Blame Ghosts shows faint inline git blame for the active line. It is disabled in untrusted workspaces, virtual workspaces, dirty files, unsaved files, and non-file documents. `restrictedConfigurations` keeps `auralis.blameGhosts.enabled` and `auralis.reviewLens.enableBlameGhosts` from taking effect until the workspace is trusted.

```text
Syntalume: Toggle Blame Ghosts
```

Blame Ghosts uses `git blame` through `execFile` after cursor movement settles. It runs only after the cursor settles in a trusted local file workspace, never during VS Code startup.
