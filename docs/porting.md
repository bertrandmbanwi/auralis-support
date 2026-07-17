<!-- Synced from the private Auralis source repo. Run `npm run docs:sync` before every release. -->

# Porting Auralis

Auralis first-party ports cover VS Code, JetBrains IDEs, and six terminals —
all generated from one palette source. Community ports carry the palettes
everywhere else: Neovim, Zed, Sublime, tmux, starship, fzf, bat, browsers,
anything with colors. This guide is the contract for a port that can carry
the Auralis name.

## The palettes

Machine-readable palettes for all nine variants live next to the terminal
ports as [`ports/palettes.json`](../ports/palettes.json): per variant, the
core UI surfaces, the full syntax role set, and the 16-color ANSI ramp —
exactly the values the shipped products use. Do not tweak the hexes: the
palettes are contrast-audited as shipped, and "close enough" colors are how
ports drift off-brand.

The same source is packaged as `@auralis-labs/palettes` for Shiki and build
tooling. To start a full port manifest and protect it from palette drift:

```sh
node scripts/validate-community-port.js --init zed ./auralis-zed.port.json
node scripts/validate-community-port.js ./auralis-zed.port.json
```

The generated manifest follows `schemas/community-port-v1.schema.json` and
copies all role values exactly, while your renderer maps those roles into the
target application's native format.

## Style rules

1. **Name**: `Auralis <Variant>` (e.g. `Auralis Noir`), one port artifact per
   variant where the target app supports multiple themes.
2. **Roles, not colors**: map by role (keyword→keyword, string→string,
   error→error). When the target has no matching role, prefer the nearest
   muted role over inventing a new color.
3. **ANSI is sacred**: terminal-adjacent tools must use the `ansi` ramp in
   order, 0–15, unmodified.
4. **Light variants**: Paper and Paper High Contrast are light — check your
   target renders them as light mode, not inverted dark.
5. **Accessibility variants are first-class**: if you port one variant, port
   Noir; if you port them all, include the HC and Colorblind variants
   unchanged — their values are deliberate.

## Submitting

Open an issue on this repo titled `Port: <app name>` with a link to your
port's repository and a screenshot per variant you ported. Maintained ports
get listed in the README's ports table. Ports are community-maintained: you
own the repo, the palettes stay the source of truth, and a heads-up issue is
enough if you need to hand one off.

## License

The palettes in `ports/palettes.json` are published for the purpose of
building and distributing Auralis ports for other applications, free or
paid-adjacent (a port may not be sold by itself). Keep the name `Auralis`,
link back to this hub, identify material color changes, and don't present a
port as the first-party product. The formal permission and boundaries are the
**Palette and community-port exception** in the repository `LICENSE`; the
exception does not include Auralis SVG/file/product icon artwork or runtime
code.
