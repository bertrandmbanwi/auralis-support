const index = require('./dist/index.json');

function themePath(name) {
  const entry = index.themes[name];
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
