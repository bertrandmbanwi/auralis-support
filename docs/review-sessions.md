<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Review Sessions and Edit Provenance

## Review Sessions

```text
Auralis: Start Review Session
```

snapshots your current look, applies the Review Lens profile (high-contrast
theme, diff and SCM settings, edit heat), resets the session heatmap, and
starts a timer in the status bar (`$(eye) Review 12m`).

```text
Auralis: End Review Session
```

(or clicking the status bar item) restores **exactly** the settings you had
before — including ones that were unset — and reports the session: duration,
files touched, typed vs bulk lines. Sessions survive a window reload.

## Edit provenance (AI or paste awareness)

The Edit Heatmap can distinguish how lines changed:

- **typed** edits stay orange,
- **bulk** edits — multi-line insertions arriving in a single change, which is
  the shape of AI suggestions and pastes — turn violet.

Enable with:

```json
{
  "auralis.editHeatmap.enabled": true,
  "auralis.editHeatmap.provenance": true
}
```

Classification is purely by edit shape, computed locally, and labeled honestly
as "bulk (AI suggestion or paste)" — Auralis does not inspect which tool made
the edit.

```text
Auralis: Show Session Edit Summary
```

reports typed vs bulk line counts per file for the current session, whether or
not the violet display is on.
