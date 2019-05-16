const itemFilters = require('./public/js/armory.json');
const uniqueItems = require('./public/js/uniqueItems.json');
const setItems = require('./public/js/setItems.json');

/* const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );n

      return { ...pokemon, abilities };
    })
  );
 */

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  // const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"])

  // Create a page that lists all Pokémon.
  createPage({
    path: '/armory/uniques',
    component: require.resolve('./src/pages/uniques.js'),
    context: { uniqueItems, itemFilters },
  });

  // Create a page for each Pokémon.
  /* allPokemon.forEach((pokemon) => {
          createPage({
            path: `/pokemon/${pokemon.name}/`,
            component: require.resolve('./src/templates/pokemon.js'),
            context: { pokemon },
          });
        }); */
};

/*
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allUniquesJson {
        edges {
          node {
          }
        }
      }
    }
  `);

  results.data.allProductsJson.edges.forEach((edge) => {
    const product = edge.node;

    createPage({
      path: `/gql/${product.slug}/`,
      component: require.resolve('./src/templates/uniques-graphql.js'),
      context: {
        node: product,
      },
    });
  });
};
 */
