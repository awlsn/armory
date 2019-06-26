
import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';
import SearchBar from '../components/SearchBar';

import BaseItem from '../components/itemTypes/BaseItem';
import Runeword from '../components/itemTypes/Runeword';
import UniqueItem from '../components/itemTypes/UniqueItem';
import Set from '../components/itemTypes/Set';
import SimpleItem from '../components/itemTypes/SimpleItem';
import CraftItem from '../components/itemTypes/CraftItem';

import BaseFilter from '../components/itemTypes/BaseFilter';

// need better support for hash loads

const ArmorySearchPage = (props) => {
  const { location, pageContext } = props;


  const [matchItemList, setMatchedItemList] = useState('[]');

  const [armoryPage, setArmoryPage] = useState(' ');

  const query = location.hash.slice(1, location.hash.length);
  if (query !== '' && !armoryPage.armoryPage) {
    setArmoryPage({ armoryPage: query });
  }
  if (query === '' && !armoryPage.armoryPage) {
    setArmoryPage({ armoryPage: ' ' });
  }


  // let UniqueOutput = <span />;


  // setItems, runes, gems, affixes,
  return (
    <Layout location={location}>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader setArmoryPage={setArmoryPage} />
      <ArmoryContent page={query} pageContext={pageContext} matchItemList={matchItemList} setMatchedItemList={setMatchedItemList} />

    </Layout>
  );
};

const ArmoryContent = (props) => {
  const { page, pageContext } = props;
  const { matchItemList, setMatchedItemList } = props;

  const [itemTypeFilters, setItemTypeFilters] = useState([]);

  const toggleFilterCheckbox = (e) => {
    const filters = [...itemTypeFilters];

    console.log('err...');
    // get the index
    const index = filters.findIndex(filter => filter.name === e.target.name);
    // update the index
    filters[index].checked = !filters[index].checked;

    // set state
    setMatchedItemList({ filters });
  };

  let filterEls = <span />;

  useEffect(() => {
    const filters = [];
    filters.push({
      type: 'quality', name: 'uniques', label: 'Uniques', checked: true,
    });
    filters.push({
      type: 'quality', name: 'sets', label: 'Sets', checked: true,
    });
    filters.push({
      type: 'quality', name: 'runewords', label: 'Runewords', checked: true,
    });
    filters.push({
      type: 'quality', name: 'augments', label: 'Augments', checked: true,
    });
    filters.push({
      type: 'quality', name: 'bases', label: 'Bases', checked: true,
    });
    filters.push({
      type: 'quality', name: 'charms', label: 'Charm Components', checked: true,
    });
    filters.push({
      type: 'quality', name: 'crafting', label: 'Crafting Recipes', checked: true,
    });
    filters.push({
      type: 'quality', name: 'affixes', label: 'Magic Prefixes/Suffixes', checked: true,
    });
    setItemTypeFilters(filters);
  }, []);

  filterEls = itemTypeFilters.map(filter => <label htmlFor={filter.name}><input onChange={toggleFilterCheckbox} id={filter.name} name={filter.name} type="checkbox" checked={filter.checked} />{filter.label}</label>);

  console.log(matchItemList);
  if (page === '/bases') {
    // not currently using this, just leaving it in for now just in case
    const itemList = pageContext.baseItems.map(item => <BaseItem key={item.index} item={item} />);
    return (
      <>
        <BaseFilter itemFilters={pageContext.itemFilters} />
        <ul style={{ padding: 0 }}>
          {itemList}
        </ul>
      </>
    );
  }


  return (
    <>
      <SearchBar query={page} masterItemList={pageContext} setMatchedItemList={setMatchedItemList} />

      {/*
        <div id="armorySubNav" className="searchFilters">
        <div>
          <h6 className="item-name diablo_unique">Item Types</h6>
          {filterEls}
        </div>
        </div>
        */}


      <p />
      <Results items={matchItemList} filters={itemTypeFilters} />
    </>
  );
};

const Results = (props) => {
  const { items, filters } = props;

  function isFiltered(name) {
    const index = filters.findIndex(filter => filter.name === name);
    if (filters[index]) return filters[index].checked;
    return false;
  }


  let output = [];
  if (isFiltered('crafting') && items.crafting && items.crafting.length > 0) {
    output.push(<h5>Crafting Recipes</h5>);
    output.push(items.crafting.map(item => <CraftItem key={item.index + item.code} item={item} />));
  }

  if (isFiltered('bases') && items.baseItems && items.baseItems.length > 0) {
    output.push(<h5>Basic Items</h5>);
    output.push(items.baseItems.map(item => <BaseItem key={item.index + item.code} item={item} />));
  }
  if (isFiltered('runewords') && items.runewordItems && items.runewordItems.length > 0) {
    output.push(<h5>Runewords</h5>);
    output.push(items.runewordItems.map(item => <Runeword key={item.index + item.code} item={item} />));
  }
  if (isFiltered('uniques') && items.uniqueItems && items.uniqueItems.length > 0) {
    output.push(<h5>Unique Items</h5>);
    output.push(items.uniqueItems.map(item => <UniqueItem key={item.index + item.code} item={item} />));
  }
  if (isFiltered('sets') && items.fullSetItems && items.fullSetItems.length > 0) {
    output.push(<h5>Sets</h5>);
    output.push(items.fullSetItems.map(item => <Set key={item.index + item.code} item={item} />));
  }
  if (isFiltered('charms') && items.charmComponents && items.charmComponents.length > 0) {
    output.push(<h5>Charm Components</h5>);
    output.push(items.charmComponents.map(item => <SimpleItem key={item.index + item.code} item={item} />));
  }
  if (isFiltered('augments') && items.augmentItems && items.augmentItems.length > 0) {
    output.push(<h5>Item Augments</h5>);
    output.push(items.augmentItems.map(item => <SimpleItem key={item.index + item.code} item={item} />));
  }


  if (!output) { output = <span />; }
  return output;
};


export default ArmorySearchPage;
