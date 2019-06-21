import React from 'react';

import BaseItem from '../components/BaseItem';
import BaseFilter from '../components/BaseFilter';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';
import ItemList from '../components/ItemList';

export default ({ pageContext }) => {
  const itemList = pageContext.baseItems.map(item => <BaseItem key={item.index + item.code} item={item} />);

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <BaseFilter itemFilters={pageContext.itemFilters} />

      <ItemList items={itemList} />


    </Layout>
  );
};
