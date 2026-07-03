# Auralis ports

Generated terminal-app palettes for every Auralis theme, produced from the
same color source as the VS Code extension by `scripts/build-ports.js`.
Do not edit by hand. Inside VS Code, the command "Auralis: Export Terminal
Theme" produces these same files for the active theme.

Get the VS Code extension: https://marketplace.visualstudio.com/items?itemName=auralis-labs.auralis-theme-system

| App | Folder | Install |
| --- | --- | --- |
| iTerm2 | `iterm2/` | Preferences → Profiles → Colors → Color Presets → Import |
| Windows Terminal | `windows-terminal/` | Add the JSON object to `schemes` in settings.json |
| Alacritty | `alacritty/` | `general.import` the TOML file in alacritty.toml |
| WezTerm | `wezterm/` | Copy into `~/.config/wezterm/colors/` and set `color_scheme` |
| Ghostty | `ghostty/` | Copy into `~/.config/ghostty/themes/` and set `theme` |
| Warp | `warp/` | Copy the YAML into `~/.warp/themes/` |
