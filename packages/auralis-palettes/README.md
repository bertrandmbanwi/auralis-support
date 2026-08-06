# @auralis-labs/palettes

Versioned, generated Syntalume themes for syntax renderers, documentation, and community ports. The files are derived from the exact same source as the VS Code, JetBrains, and terminal releases.

```js
const { loadTheme } = require('@auralis-labs/palettes');
const noir = loadTheme('Auralis Noir');
```

With Shiki, pass the loaded VS Code-compatible theme object as a custom theme. Direct JSON imports are also available under `@auralis-labs/palettes/themes/<file>.json`.

Every release includes `dist/index.json`, which follows the public Syntalume palette v1 schema and carries editor, accent, and complete ANSI terminal metadata for all nine variants.

The package also publishes `dist/icon-associations.json`: the generated file,
folder, root-folder, and language mappings behind Icon Studio, without bundling
the proprietary SVG artwork. Load it with `loadIconAssociations()` when building
coverage reports or proposing a missing association.

## License

The packaged `LICENSE` includes the Syntalume palette and community-port
exception. It permits syntax/documentation use and attributed Syntalume ports;
it does not license the extension runtime or proprietary SVG/icon artwork.
