#!/usr/bin/env node

// Validates a community port's copied role palettes against the generated
// Syntalume source of truth. This catches subtle color drift before a port is
// submitted. Ports are named "Syntalume <Variant>". `--init` creates a
// complete starter manifest for port authors.
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const CANONICAL_FILE = path.join(ROOT, 'ports', 'palettes.json');
const SCHEMA_URL = 'https://auralislab.dev/schema/community-port-v1.json';

function loadCanonical() {
  return JSON.parse(fs.readFileSync(CANONICAL_FILE, 'utf8')).palettes;
}

function paletteMap(palettes) {
  return new Map((Array.isArray(palettes) ? palettes : []).map((palette) => [palette.name, palette]));
}

function stable(value) {
  return JSON.stringify(value);
}

function validateCommunityPort(port, canonicalPalettes = loadCanonical()) {
  const errors = [];
  if (!port || typeof port !== 'object' || Array.isArray(port)) return ['Port manifest must be one JSON object.'];
  if (port.schemaVersion !== 1) errors.push('schemaVersion must be 1.');
  if (typeof port.target !== 'string' || !port.target.trim()) errors.push('target must name the destination app.');
  if (!Array.isArray(port.variants) || !port.variants.length)
    errors.push('variants must include at least one palette.');
  const canonical = paletteMap(canonicalPalettes);
  const seen = new Set();
  for (const variant of Array.isArray(port.variants) ? port.variants : []) {
    if (!variant || typeof variant !== 'object') {
      errors.push('Every variant must be an object.');
      continue;
    }
    if (seen.has(variant.name)) errors.push(`Duplicate variant: ${variant.name}.`);
    seen.add(variant.name);
    const expected = canonical.get(variant.name);
    if (!expected) {
      errors.push(`Unknown Syntalume variant: ${variant.name || 'missing name'}.`);
      continue;
    }
    for (const role of ['type', 'ui', 'syntax', 'ansi']) {
      if (stable(variant[role]) !== stable(expected[role])) {
        errors.push(`${variant.name}: ${role} differs from the canonical generated palette.`);
      }
    }
  }
  return errors;
}

function starterManifest(target, canonicalPalettes = loadCanonical()) {
  return {
    $schema: SCHEMA_URL,
    schemaVersion: 1,
    target,
    source: 'ports/palettes.json',
    variants: canonicalPalettes.map(({ name, type, ui, syntax, ansi }) => ({
      name,
      type,
      ui: { ...ui },
      syntax: { ...syntax },
      ansi: [...ansi],
    })),
  };
}

function main(argv = process.argv.slice(2)) {
  if (argv[0] === '--init') {
    const target = String(argv[1] || '').trim();
    const output = argv[2] ? path.resolve(argv[2]) : '';
    if (!target || !output) throw new Error('Usage: validate-community-port.js --init <target> <output.json>');
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, `${JSON.stringify(starterManifest(target), null, 2)}\n`);
    console.log(`Created canonical ${target} port manifest at ${output}`);
    return;
  }
  const input = argv[0] ? path.resolve(argv[0]) : '';
  if (!input) throw new Error('Usage: validate-community-port.js <port.json>');
  const port = JSON.parse(fs.readFileSync(input, 'utf8'));
  const errors = validateCommunityPort(port);
  if (errors.length) {
    for (const error of errors) console.error(`✗ ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`✓ ${port.target}: ${port.variants.length} Syntalume variants match the canonical palette.`);
  }
}

if (require.main === module) main();

module.exports = { SCHEMA_URL, starterManifest, validateCommunityPort };
