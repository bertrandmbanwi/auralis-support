# Performance and Privacy

## Startup

Auralis does not use startup activation. Themes, file icons, product icons, and configuration defaults load through VS Code contribution points.

Extension code wakes only when you run an Auralis command.

## Optional Ambience

Optional ambience features are engineered to stay local and bounded:

- Focus Field uses visible editor ranges.
- Edit Heatmap caps retained files and lines.
- Blame Ghosts is debounced, cached, disabled by default, and skipped in untrusted or virtual workspaces.

## Privacy

Auralis does not collect telemetry and does not call remote services in the `0.2.x` beta line.

See [Privacy](../PRIVACY.md).

