import React, { useState, useEffect } from 'react';

import UniqueItem from './itemTypes/UniqueItem';
import UpgradeableUniqueItem from './itemTypes/UpgradeableUniqueItem';

const ItemList = (props) => {
  const { items } = props;

  const [loadedList, setLoadedList] = useState(<div className="center"><h6>Loading...</h6><br /><img src="/images/chaos-barbhireable.gif" /></div>);

  const findUniqueItemByIndex = (itemIndex) => {
    const match = items.filter((item) => {
      if (item.index === itemIndex) {
        return true;
      }
      return false;
    });
    return match[0];
  };


  const allUniqueItems = items.map((item) => {
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
    // setHasMore(false);
    // setLoadedList(uniqueItems);
  });

  // const initalUniqueItems = allUniqueItems.slice(0, 50);

  useEffect(() => {
    setLoadedList(allUniqueItems);
    /* setTimeout(() => {
      uniqueItems = allUniqueItems;
      // setHasMore(false);
      setLoadedList(uniqueItems);
      // console.log(uniqueItems);
    }, 50); */
  }, <span />);


  return <>{loadedList}</>;
};

export default ItemList;
