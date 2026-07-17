<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Auralis Type — Font Pairings

A theme is only half the picture; the letterforms are the other half. Auralis
Type curates one font pairing per theme family — all free under the SIL Open
Font License — and applies it in one command.

## Apply

Run:

```text
Auralis: Apply Auralis Type (Font Pairing)
```

The pairing recommended for your active theme is listed first:

| Pairing | Recommended with | Character |
| --- | --- | --- |
| JetBrains Mono | Noir, Void, Dimmed | tall x-height, calm rhythm |
| Fira Code | Frost, Frost Colorblind | the ligature classic |
| Cascadia Code | Botanica | rounded, friendly, organic |
| Victor Mono | Paper | cursive italics — comments read like margin notes |
| IBM Plex Mono | the High Contrast variants | sober clarity, no ligatures |

Applying sets the editor font, ligatures, and the integrated terminal font.
If the font isn't installed yet, VS Code falls back gracefully and the
confirmation offers the download page (every font is free).

## Restore

The first apply records the prior value and the exact value written for editor
font, ligatures, and terminal font independently. Reapplying another pairing
keeps that original baseline. Choose **Restore my previous fonts** to restore
each setting only while it still matches Auralis Type; a later manual font edit
wins. Apply and restore are transactional, and an interrupted restore keeps
its ownership record so it can be retried safely.
