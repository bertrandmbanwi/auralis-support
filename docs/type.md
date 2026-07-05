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

The first apply snapshots whatever fonts you had. Run the command again and
choose **Restore my previous fonts** to get back exactly what was there —
even after trying several pairings.
