<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Diagnostics, Feedback, and Reviews

Auralis keeps support paths visible and user-initiated. There are no first-run,
recurring, or promotional review prompts.

## Copy sanitized diagnostics

Run:

```text
Auralis: Copy Auralis Diagnostics
```

The confirmation preview shows the exact payload before anything is copied. It
includes the Auralis and editor versions, desktop/web host,
workspace trust state, URI schemes, active themes and icons, and Auralis Tune,
Rhythm, and Environment Guard settings. It excludes file paths, project names,
source code, secrets, Kubernetes context names, Terraform workspace names, and
git branch names.

Nothing is transmitted. After copying, you may choose to open a public issue;
Auralis shows the exact issue URL before opening it, and you paste only what
you want to share.

## Focused request paths

These commands show the exact public, prefilled GitHub URL before opening an
issue that you can inspect and edit before submitting:

```text
Auralis: Report Visual Bug
Auralis: Request Icon
Auralis: Request Language Coverage
```

`Request Icon` first asks for the filename, extension, folder, or language.
`Request Language Coverage` first asks for the language or framework. The
answers stay local until the prefilled issue opens in your browser, and GitHub
submits nothing until you choose **Submit new issue**.

## Share a setup or leave a review

```text
Auralis: Share My Setup
Auralis: Review Auralis
```

Share My Setup previews and then copies a small JSON object containing only the
active Auralis theme/icon choices and optional Tune, Rhythm, and Guard state.
Review Auralis previews the official VS Code Marketplace review URL before it
opens. Both actions occur only when you run the command. The quiet Dashboard
review link appears only after you have explicitly applied Tune or a shared
profile at least once on that VS Code installation.
