import React from 'react';

import UniqueItem from '../components/UniqueItem';
import UpgradeableUniqueItem from '../components/UpgradeableUniqueItem';
import UniqueFilters from '../components/UniqueFilters';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ pageContext: { uniqueItems, itemFilters } }) => {
  // need to try adding handler
  const handleClick = (e) => {
    console.log(itemFilters);
  };
  const findUniqueItemByIndex = (itemIndex) => {
    const match = uniqueItems.filter((item) => {
      if (item.index === itemIndex) {
        return true;
      }
      return false;
    });
    return match[0];
  };
  const upgradeableUniques = [];

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <UniqueFilters itemFilters={itemFilters} />
      <ul style={{ padding: 0 }}>
        {uniqueItems.map((item) => {
          // upgradeable items
          if (item.upgradeIndex !== '' && item.root) {
            // build an array of items in the upgrade set by getting the upgradeIndexes until it is ""
            const items = [];
            let thisItem = item;

            while (thisItem.upgradeIndex !== '') {
              items.push(thisItem);
              thisItem = findUniqueItemByIndex(thisItem.upgradeIndex);
            }
            items.push(thisItem);
            return <UpgradeableUniqueItem key={item.index} items={items} />;
          }
          // non-upgradeable items
          if (item.upgradeIndex === '' && item.root) {
            return <UniqueItem key={item.index} item={item} />;
          }
        })}
      </ul>
    </Layout>
  );
};
