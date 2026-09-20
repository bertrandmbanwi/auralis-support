#!/usr/bin/env node

// Runs unchanged in the public support clone: no install or private source required.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function verifyPalettePackage(root = path.resolve(__dirname, '..')) {
  const packageRoot = path.join(root, 'packages', 'auralis-palettes');
  const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));
  const canonical = JSON.parse(fs.readFileSync(path.join(root, 'ports', 'palettes.json'), 'utf8')).palettes;
  const palettes = require(packageRoot);
  const esm = await import(pathToFileURL(path.join(packageRoot, 'index.mjs')).href);
  assert.equal(manifest.name, '@auralis-labs/palettes');
  assert.equal(palettes.schemaVersion, 1);
  assert.equal(palettes.packageVersion, manifest.version);
  for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'scripts']) {
    assert.equal(Object.keys(manifest[field] || {}).length, 0, `Unexpected package ${field}`);
  }
  const names = canonical.map(({ name }) => name);
  assert.equal(names.length, 9);
  assert.deepEqual(Object.keys(palettes.themes), names);
  assert.deepEqual(
    palettes.aliases,
    Object.fromEntries(names.map((name) => [name.replace(/^Syntalume /, 'Auralis '), name])),
  );
  assert.deepEqual(esm.aliases, palettes.aliases);
  for (const [legacy, name] of Object.entries(palettes.aliases)) {
    const theme = palettes.loadTheme(name);
    const entry = palettes.themes[name];
    const canonicalPalette = canonical.find((palette) => palette.name === name);
    assert.equal(entry.type, canonicalPalette.type);
    assert.equal(entry.editorBackground, canonicalPalette.ui.editor);
    assert.equal(entry.editorForeground, canonicalPalette.ui.foreground);
    assert.equal(entry.accent, canonicalPalette.ui.accent);
    assert.equal(entry.terminal['terminal.background'], canonicalPalette.ui.terminalBackground);
    assert.equal(entry.terminal['terminal.foreground'], canonicalPalette.ui.terminalForeground);
    const ansiNames = ['Black', 'Red', 'Green', 'Yellow', 'Blue', 'Magenta', 'Cyan', 'White'];
    for (let i = 0; i < 16; i += 1) {
      const ansiName = `terminal.ansi${i >= 8 ? 'Bright' : ''}${ansiNames[i % 8]}`;
      assert.equal(entry.terminal[ansiName], canonicalPalette.ansi[i]);
    }
    assert.equal(theme.name, name);
    assert.deepEqual(palettes.loadTheme(legacy), theme);
    assert.deepEqual(esm.loadTheme(legacy), theme);
    assert.equal(entry.type, theme.type);
    assert.equal(entry.editorBackground, theme.colors['editor.background']);
    assert.equal(entry.editorForeground, theme.colors['editor.foreground']);
    assert.equal(entry.accent, theme.colors.focusBorder);
    for (const [color, value] of Object.entries(entry.terminal)) assert.equal(value, theme.colors[color]);
    assert.ok(palettes.themePath(name).startsWith(path.join(packageRoot, 'dist', 'themes') + path.sep));
  }
  for (const invalid of ['constructor', '__proto__', 'toString', '../LICENSE', 'Unknown']) {
    assert.throws(() => palettes.loadTheme(invalid), /Unknown Syntalume theme/);
  }
  assert.equal(palettes.loadIconAssociations().schemaVersion, 1);
  assert.equal(
    fs.readFileSync(path.join(packageRoot, 'LICENSE'), 'utf8'),
    fs.readFileSync(path.join(root, 'LICENSE'), 'utf8'),
    'The published package must contain the complete current license.',
  );
  return names.length;
}

if (require.main === module) {
  verifyPalettePackage()
    .then((count) => console.log(`Verified ${count} public palettes, both module APIs, legacy aliases, and license.`))
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}

module.exports = { verifyPalettePackage };
