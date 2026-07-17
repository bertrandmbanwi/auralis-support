<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Project Themes & Accents

Every window its own aurora. When you work across several projects at once,
the "which window is this?" problem is real — Auralis solves it per project.

## Assign

Run:

```text
Auralis: Assign Project Theme & Accent
```

1. Pick a theme variant for this project (or keep your current theme).
2. Choose whether to add a **project accent**: a tint for the title bar and
   activity border derived deterministically from the project's folder name —
   the same name produces the same color on every machine, with nothing
   stored or synced.

Both writes go to **workspace settings only**: your global setup is
untouched, and the project opens with its own look on every machine that
opens it (the theme applies for anyone with Auralis installed; the
`.vscode/settings.json` entry is a normal, transparent VS Code setting).

## Clear

Run the same command and choose **Clear project theme & accent**. Auralis
restores the prior Workspace theme and each prior chrome color only while the
current value still matches what it applied. Later manual edits and unrelated
`workbench.colorCustomizations` keys are preserved. Reapplying keeps the
original baseline, and theme + accent apply/clear as one rollback-safe
transaction. If VS Code rejects part of a rollback, Auralis retains recovery
ownership so **Clear project theme & accent** can safely retry the exact
restore.

## How it plays with other features

- **Environment Guard**: when Guard tints the chrome for prod/staging, it
  snapshots what the project accent had written and restores it exactly when
  the signal clears.
- **Team profiles**: `.auralis/profile.json` recommends a team-wide
  experience with consent; the project accent is your personal, per-machine
  choice layered on top.
- **Rhythm**: a workspace theme assignment wins over the schedule in that
  window — that's VS Code's normal settings precedence.
