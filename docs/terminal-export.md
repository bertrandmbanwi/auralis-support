<!-- Synced from the private Syntalume source repo. Run `npm run docs:sync` before every release. -->

# Export Terminal Theme

Your terminal can match your editor exactly. Syntalume generates ports of every
theme for six terminal apps from the same color source as the VS Code themes,
and one command exports them from inside VS Code.

## Export

Run:

```text
Syntalume: Export Terminal Theme
```

1. If a Syntalume theme is active, it is exported; otherwise you pick one.
2. Pick the terminal app: iTerm2, Windows Terminal, Alacritty, WezTerm,
   Ghostty, or Warp.
3. Choose where to save the file. The confirmation message includes the
   install hint for the app you picked.

The command is also available on the Setup Dashboard.

## Installing the exported file

| App | Install |
| --- | --- |
| iTerm2 | Preferences → Profiles → Colors → Color Presets → Import |
| Windows Terminal | Add the JSON object to `schemes` in settings.json |
| Alacritty | Import the TOML file via `general.import` in alacritty.toml |
| WezTerm | Copy into `~/.config/wezterm/colors/` and set `color_scheme` |
| Ghostty | Copy into `~/.config/ghostty/themes/` and set `theme` |
| Warp | Copy the YAML into `~/.warp/themes/` |

## What is in a port

Each port carries the theme's terminal background, foreground, cursor,
selection, and all sixteen ANSI colors — the exact `terminal.*` values you see
in VS Code's integrated terminal, so colors match across both.

Pre-generated ports for every theme also live in the `ports/` folder of the
public support hub, along with `terminal-colors.sh` — a small script that
prints your terminal theme's 16-color palette and a Syntalume wordmark drawn
in those colors, so you can see the port the moment it is installed:

- https://github.com/bertrandmbanwi/auralis-support
