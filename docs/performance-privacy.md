<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Performance and Privacy

Syntalume is designed around explicit budgets and local work, not an absolute
"no startup cost" promise.

## Performance

- Color themes, file icons, and product icons load declaratively with no code execution.
- The small runtime activates lazily at `onStartupFinished`, after VS Code's
  own startup path. It registers commands but claims no idle status-bar space;
  the single optional Syntalume entry exists only while Environment Guard or a
  Review Session has state to show. Enabled optional tools then initialize
  only the work they need.
- Desktop and browser entry points record the duration of the actual
  `activate()` registration path. Desktop also records its non-negative heap
  delta. Integration QA reads those in-memory measurements for release-budget
  assertions; they contain no workspace or user data and are never sent.
- Release gates cap the generated desktop bundle at 320 KiB and the browser
  bundle at 284 KiB. The browser ceiling includes the same bounded,
  fail-closed exact-reset safety checks as desktop. The real VS Code
  integration suite budgets extension
  activation below 2 seconds and activation heap growth below 32 MiB on the CI
  runner. These are ceilings, not claims that every machine has identical
  timings.
- Representative theme, icon, language, diff, terminal, and JetBrains resource
  outputs have deterministic visual baselines; changing one requires an
  explicit baseline update.
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
- No passive review or feedback prompts. Support links run only when you choose
  them and let you inspect the copied or prefilled payload before submitting.
- The optional JetBrains Companion reads `.auralis/profile.json` only when you
  inspect or apply it. Accepted appearance values are stored in normal local
  IDE/project component state and a locally derived editor scheme; no project
  file is edited and nothing is transmitted. Exact reset fingerprints public
  scheme settings so later manual edits are preserved.
- The Setup Dashboard can show two aggregate activity counts: explicit Tune
  applies and shared profile recommendations you chose to apply. They contain
  no timestamps, project names, paths, or settings; they stay in this VS Code
  installation's local extension storage, are never transmitted, and can be
  cleared from the dashboard at any time.
- Blame Ghosts runs local `git blame` only when enabled by the user and only in trusted local workspaces. `restrictedConfigurations` keeps the blame settings from taking effect until the workspace is trusted.
- Syntalume Doctor only checks whether optional companion CLIs are available on `PATH`, and only in trusted workspaces; it does not run formatters or linters against your source files.
- The Setup Dashboard webview is locked down: a crypto-strong per-render nonce, `localResourceRoots: []`, `retainContextWhenHidden: false`, and a `default-src 'none'` Content-Security-Policy. It loads no external or local resources.
- Accessibility Lab uses a locked-down, local-resource-free webview. Icon
  Studio's equally locked-down webview can read only Syntalume's packaged icon
  directory so it can render its inventory; it cannot read workspace files.
  On desktop, Apply rewrites only the bounded contributed Studio manifest and
  SVG directory inside the installed extension. Presets and reports stay local
  until you explicitly copy or save them.
- License and trial state is local-first: trial state lives in VS Code global state and a license key lives in VS Code secret storage. Neither is sent over the network, and there is no startup license check. Signed license keys are verified entirely offline against a public key embedded in the extension, and `Syntalume: Show License Status` reports the stored state (during the public beta everything is unlocked for everyone regardless).

## Web and Virtual Workspaces

In browser-based VS Code environments, Syntalume keeps themes, file icons,
product icons, profiles, and the finite Icon Studio fallback available.
Arbitrary Studio asset generation and desktop ambience are skipped because web
extensions cannot use Node filesystem or process APIs.
