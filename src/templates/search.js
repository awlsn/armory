
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

// search should be handled by the url parameter so that we can forward to it from a searchbox component?
// search results are conditionally rendered based on the outcome of the search function(s)
// query -> search -> output

const ArmorySearchPage = (props) => {
  const { location, pageContext } = props;
  const query = location.hash.slice(1, location.hash.length);

  const [matchItemList, setMatchedItemList] = useState('[]');

  console.log(query);
  console.log(pageContext);

  // let UniqueOutput = <span />;

  useEffect(() => {
    // console.log(matchItemList);
    if (matchItemList.uniqueItems) {
      // UniqueOutput = matchItemList.uniqueItems.map(item => <UniqueItem item={item} />);
    }
  });

  // setItems, runes, gems, affixes,
  return (
    <Layout location={location}>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <SearchBar masterItemList={pageContext} setMatchedItemList={setMatchedItemList} query={query} />
      <Results items={matchItemList} />

    </Layout>
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
