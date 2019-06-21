
import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';
import SearchBar from '../components/SearchBar';

import BaseItem from '../components/BaseItem';
import Runeword from '../components/Runeword';
import UniqueItem from '../components/UniqueItem';
import Set from '../components/Set';
import SimpleItem from '../components/SimpleItem';

import BaseFilter from '../components/BaseFilter';

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

  useEffect(() => {
    
    
  });

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
  if (page === '/bases') {
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
      <Results items={matchItemList} />
    </>
  );
};

const Results = (props) => {
  const { items } = props;
  let output = [];
  if (items.baseItems) {
    output.push(items.baseItems.map(item => <BaseItem key={item.index} item={item} />));
  }
  if (items.runewordItems) {
    output.push(items.runewordItems.map(item => <Runeword key={item.index} item={item} />));
  }
  if (items.uniqueItems) {
    output.push(items.uniqueItems.map(item => <UniqueItem key={item.index} item={item} />));
  }
  // need to fix set items
  if (items.fullSetItems) {
    output.push(items.fullSetItems.map(item => <Set key={item.index} item={item} />));
  }
  if (items.charmComponents) {
    output.push(items.charmComponents.map(item => <SimpleItem key={item.index} item={item} />));
  }
  if (items.augmentItems) {
    output.push(items.augmentItems.map(item => <SimpleItem key={item.index} item={item} />));
  }


  if (!output) { output = <span />; }
  return output;
};


export default ArmorySearchPage;
