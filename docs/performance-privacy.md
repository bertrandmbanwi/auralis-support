<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Performance and Privacy

Auralis is designed to feel instant.

## Performance

- Color themes, file icons, and product icons load declaratively with no code execution.
- The runtime activates lazily after startup (`onStartupFinished`), never during VS Code's own startup. It only registers commands and the optional status bar item until you turn something on, and does effectively nothing at startup when ambience is off.
- Enabled ambience survives a restart instead of resetting each session.
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
- Blame Ghosts runs local `git blame` only when enabled by the user and only in trusted local workspaces. `restrictedConfigurations` keeps the blame settings from taking effect until the workspace is trusted.
- Auralis Doctor only checks whether optional companion CLIs are available on `PATH`, and only in trusted workspaces; it does not run formatters or linters against your source files.
- The Setup Dashboard webview is locked down: a crypto-strong per-render nonce, `localResourceRoots: []`, `retainContextWhenHidden: false`, and a `default-src 'none'` Content-Security-Policy. It loads no external or local resources.
- License and trial state is local-first: trial state lives in VS Code global state and a license key lives in VS Code secret storage. Neither is sent over the network, and there is no startup license check. Signed license keys are verified entirely offline against a public key embedded in the extension, and `Auralis: Show License Status` reports the stored state (during the public beta everything is unlocked for everyone regardless).

## Web and Virtual Workspaces

In browser-based VS Code environments, Auralis keeps themes, file icons, product icons, and profiles available. Desktop-only ambience features are skipped because web extensions cannot use Node process APIs such as local `git blame`.
