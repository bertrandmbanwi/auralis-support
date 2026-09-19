<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Diagnostics, Feedback, and Reviews

Syntalume keeps support paths visible and user-initiated. There are no first-run,
recurring, or promotional review prompts.

## Copy sanitized diagnostics

Run:

```text
Syntalume: Copy Support Diagnostics
```

The confirmation preview shows the exact payload before anything is copied. It
includes the Syntalume and editor versions, desktop/web host,
workspace trust state, URI schemes, active themes and icons, and Syntalume Tune,
Rhythm, and Environment Guard settings. It excludes file paths, project names,
source code, secrets, Kubernetes context names, Terraform workspace names, and
git branch names.

Nothing is transmitted. After copying, you may choose to open a public issue;
Syntalume shows the exact issue URL before opening it, and you paste only what
you want to share.

## Focused request paths

These commands show the exact public, prefilled GitHub URL before opening an
issue that you can inspect and edit before submitting:

```text
Syntalume: Report Visual Theme Bug
Syntalume: Request Missing Icon
Syntalume: Request Language Coverage
```

`Request Missing Icon` first asks for the filename, extension, folder, or language.
`Request Language Coverage` first asks for the language or framework. The
answers stay local until the prefilled issue opens in your browser, and GitHub
submits nothing until you choose **Submit new issue**.

## Share a setup or leave a review

```text
Syntalume: Copy Shareable Setup
Syntalume: Review Syntalume
```

Copy Shareable Setup previews and then copies a small JSON object containing only the
active Syntalume theme/icon choices and optional Tune, Rhythm, and Guard state.
Review Syntalume previews the exact review URL before it opens, and routes to
the registry your editor installs from: genuine VS Code opens the official
VS Code Marketplace review page, while VSCodium, code-server, and other
Open VSX-based hosts open the Open VSX review page. Both actions occur only
when you run the command.

The quiet review entries in the Setup Dashboard and the Syntalume menu appear
only after this installation has recorded at least one locally counted moment
of delivered value: applying Tune, a shared profile, an Icon Studio preset, an
accessibility status axis, a font pairing, a contrast repair, a terminal
export, or a project theme. The counters are anonymous totals stored only in
local extension state (`auralis.localUsageCounters.enabled` disables them and
clears the stored counts), and nothing ever prompts you to review.
