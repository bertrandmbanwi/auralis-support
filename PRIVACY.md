<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Privacy

Auralis is local-first. Themes and icons load as editor assets, and the
optional runtime does not collect or transmit telemetry.

## What Auralis does not collect

- No source code, filenames, project paths, repository names, environment
  labels, settings, or diagnostics are uploaded.
- No device or account identifier is created.
- No analytics, advertising SDK, crash reporter, tracking pixel, or background
  network service is included.
- Offline license verification does not contact a license server.

## Local data

Auralis may keep the following data in the editor's extension storage, only on
the current installation:

- Settings and exact-reset ownership records for features you explicitly
  apply, including a local sequence of Auralis setting changes used only to
  unwind interleaved features during General Reset.
- Draft Icon Studio presets and saved Tune/profile choices.
- A signed license key in VS Code secret storage, if you choose to enter one.
- Two optional aggregate counters: Tune applies and shared-profile applies.
- The optional JetBrains Companion stores its local choices and exact-reset
  ownership in JetBrains application/project metadata. It does not edit source
  files or transmit that metadata.

The counters contain no timestamps, project or workspace identifiers, paths,
labels, or setting values. They are never transmitted. You can disable and
clear them from the Setup Dashboard, and `Auralis: Reset Auralis Settings`
clears Auralis-owned runtime state.

Edit Heatmap data stays in memory for the current session. Environment Guard
derives a severity locally from the active Git branch, Kubernetes context, and
workspace name, but stores only bounded configuration and a short-lived hash
for a signal-specific snooze—not the raw label.

## Local tools and files

- Blame Ghosts invokes local `git blame` only when enabled, in a trusted local
  workspace, after cursor movement settles.
- Doctor checks only whether documented optional command-line tools are
  available; it does not run them against source files.
- Export, profile, accessibility, and port commands write only to a location
  you choose or to Auralis-owned editor settings.
- On desktop, applying arbitrary Icon Studio controls regenerates only the
  packaged `auralis-icons-studio` manifest and its extension-owned SVG copies;
  it never writes into a project. Browser builds use shipped presets instead.
- Browser and virtual-workspace builds omit Node-only process access.

## User-initiated links and feedback

Auralis never submits feedback or opens a review prompt automatically. When you
choose a support, review, font, Marketplace, or companion-extension action, it
shows the relevant destination or payload first and then asks the editor to
open that link in your browser. Any information you submit is governed by the
destination's privacy terms.

## Questions

For privacy questions that do not contain sensitive information, use the
[public Auralis support hub](https://github.com/bertrandmbanwi/auralis-support).
Report suspected security vulnerabilities through the private publisher
contact path described in [SECURITY.md](SECURITY.md).
