const itemFilters = require('./data/armory.json');
const baseItems = require('./data/baseItems.json');
const runewords = require('./data/runewords.json');
const uniqueItems = require('./data/uniqueItems.json');
const setItems = require('./data/setItems.json');
const charmComponents = require('./data/charmComponents.json');
const runes = require('./data/runes.json');
const gems = require('./data/gems.json');
const augments = require('./data/augments.json');
const affixes = require('./data/affixes.json');

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/armory/',
    component: require.resolve('./src/pages/armory.js'),
    context: {},
  });
  createPage({
    path: '/armory/bases',
    component: require.resolve('./src/templates/bases.js'),
    context: { baseItems, itemFilters },
  });
  createPage({
    path: '/armory/runewords',
    component: require.resolve('./src/templates/runewords.js'),
    context: { runewords, itemFilters },
  });
  createPage({
    path: '/armory/uniques',
    component: require.resolve('./src/templates/uniques.js'),
    context: { uniqueItems, itemFilters },
  });
  createPage({
    path: '/armory/sets',
    component: require.resolve('./src/templates/sets.js'),
    context: { setItems, itemFilters },
  });
  createPage({
    path: '/armory/charm-components',
    component: require.resolve('./src/templates/charms.js'),
    context: { charmComponents, itemFilters },
  });
  createPage({
    path: '/armory/runes',
    component: require.resolve('./src/templates/runes.js'),
    context: { runes, itemFilters },
  });
  createPage({
    path: '/armory/gems',
    component: require.resolve('./src/templates/gems.js'),
    context: { gems, itemFilters },
  });
  createPage({
    path: '/armory/augments',
    component: require.resolve('./src/templates/augments.js'),
    context: { augments, itemFilters },
  });
  createPage({
    path: '/armory/affixes',
    component: require.resolve('./src/templates/affixes.js'),
    context: { affixes, itemFilters },
  });
};
