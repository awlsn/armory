const itemFilters = require('./data/armory.json');
const uniqueItems = require('./data/uniqueItems.json');
const setItems = require('./data/setItems.json');

exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/armory/uniques',
    component: require.resolve('./src/templates/uniques.js'),
    context: { uniqueItems, itemFilters },
  });
};
