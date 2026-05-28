# Privacy

Auralis is designed to behave like a premium theme first.

## No Telemetry

Auralis does not collect, store, or transmit telemetry.

## No Remote Services

Auralis does not call a remote server in the current `0.2.x` beta releases.

## Local Optional Features

Optional ambience features are local-only:

- Focus Field uses VS Code editor decorations.
- Edit Heatmap stores current-session edit metadata in memory only.
- Blame Ghosts runs local `git blame` only when enabled, only in trusted local workspaces, and only after cursor movement settles.

## Future Licensing

Future paid licensing should remain isolated from the theme-only path:

- No startup license checks.
- No source-code upload.
- No workspace scanning.
- User-triggered sign-in or license activation.
- Graceful offline behavior.

