const itemFilters = require('./data/armory.json');
const uniqueItems = require('./data/uniqueItems.json');
const setItems = require('./data/setItems.json');

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/armory/uniques',
    component: await require.resolve('./src/templates/uniques.js'),
    context: { uniqueItems, itemFilters },
  });
};
