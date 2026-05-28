<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Ambience Features

Auralis ambience features are optional editor decorations. They are off by default unless a profile enables them.

## Focus Field

Focus Field subtly shades visible lines away from the cursor. It only decorates visible editor ranges so large files stay responsive.

```text
Auralis: Toggle Focus Field
```

Settings:

- `auralis.focusField.enabled`
- `auralis.focusField.radius`
- `auralis.focusField.intensity`

## Edit Heatmap

Edit Heatmap tracks current-session edits and shows subtle line and overview ruler heat. It caps files, lines, and age so memory stays bounded.

```text
Auralis: Toggle Edit Heatmap
Auralis: Clear Edit Heatmap
```

Settings:

- `auralis.editHeatmap.enabled`
- `auralis.editHeatmap.maxAgeMinutes`
- `auralis.editHeatmap.maxLinesPerFile`
- `auralis.editHeatmap.maxFiles`

## Blame Ghosts

Blame Ghosts shows faint inline git blame for the active line. It is disabled in untrusted workspaces, virtual workspaces, dirty files, unsaved files, and non-file documents.

```text
Auralis: Toggle Blame Ghosts
```

Blame Ghosts uses `git blame` through `execFile` after cursor movement settles. It does not run on startup.
