<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Performance and Privacy

Auralis is designed to feel instant.

## Performance

- No startup activation.
- Themes, file icons, and product icons load through VS Code contribution points.
- Commands activate extension code only when the user asks for them.
- Tooling setup commands only write VS Code settings and optionally open/install companion extensions after user confirmation.
- Focus Field decorates visible ranges only.
- Edit Heatmap caps files, lines, and age.
- Blame Ghosts debounces cursor movement and caches results.

## Privacy

- No telemetry.
- No background network calls.
- No remote server calls for theme usage.
- No secret scanning.
- No source upload.
- Blame Ghosts runs local `git blame` only when enabled by the user and only in trusted local workspaces.
- Auralis Doctor only checks whether optional companion CLIs are available on `PATH`; it does not run formatters or linters against your source files.

## Web and Virtual Workspaces

In browser-based VS Code environments, Auralis keeps themes, file icons, product icons, and profiles available. Desktop-only ambience features are skipped because web extensions cannot use Node process APIs such as local `git blame`.
