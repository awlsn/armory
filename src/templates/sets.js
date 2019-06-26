import React from 'react';

import Set from '../components/itemTypes/Set';
import SetFilters from '../components/itemTypes/SetFilter';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

export default ({ pageContext }) => {
  const itemList = pageContext.setItems.map(item => <Set key={item.index} item={item} />);

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <SetFilters items={pageContext.setItems} />
      <ul style={{ padding: 0 }}>
        {itemList}
      </ul>
    </Layout>
  );
};
