<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Review Sessions and Edit Provenance

## Review Sessions

```text
Syntalume: Start Review Session
```

snapshots your current look, applies the Review Lens profile (high-contrast
theme, diff and SCM settings, edit heat), resets the session heatmap, and
starts a timer in the status bar (`$(eye) Review 12m`).

```text
Syntalume: End Review Session
```

(or clicking the status bar item) restores each Review-owned value only while
it still matches the session's applied value. Values that were unset return to
unset, prior values return exactly, and any later manual edit wins. The
serializable ownership receipt survives a window reload; an interrupted
restore keeps the session active so it can be retried. The summary reports
duration, files touched, and typed vs bulk lines.

General Reset silently ends an active Review Session first, restores its exact
receipt, and stops the timer before clearing profile ownership. A stale **End
Review Session** action therefore cannot replay an older setup afterward.

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
as "bulk (AI suggestion or paste)" — Syntalume does not inspect which tool made
the edit.

```text
Syntalume: Show Session Edit Summary
```

reports typed vs bulk line counts per file for the current session, whether or
not the violet display is on.
