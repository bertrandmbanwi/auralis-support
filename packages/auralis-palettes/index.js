const index = require('./dist/index.json');

function themePath(name) {
  const canonicalName = Object.hasOwn(index.aliases, name) ? index.aliases[name] : name;
  const entry = Object.hasOwn(index.themes, canonicalName) ? index.themes[canonicalName] : undefined;
  if (!entry) throw new Error(`Unknown Syntalume theme: ${name}`);
  return require.resolve(`./dist/${entry.file}`);
}

function loadTheme(name) {
  return require(themePath(name));
}

function loadIconAssociations() {
  return require('./dist/icon-associations.json');
}

module.exports = { ...index, loadIconAssociations, loadTheme, themePath };
