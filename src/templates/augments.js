import React from 'react';

import Augment from '../components/itemTypes/SimpleItem';
import AugmentFilters from '../components/itemTypes/GemFilters';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

export default ({ pageContext }) => {
  const itemList = pageContext.augments.map(item => <Augment key={item.index} item={item} />);

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <AugmentFilters items={pageContext.affixes} />
      <ul style={{ padding: 0 }}>
        {itemList}
      </ul>
    </Layout>
  );
};
