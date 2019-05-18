import React from 'react';

import CharmComponent from '../components/SimpleItem';
import CharmComponentFilters from '../components/CharmComponentFilters';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

export default ({ pageContext }) => {
  const itemList = pageContext.charmComponents.map(item => <CharmComponent key={item.index} item={item} />);

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <CharmComponentFilters items={pageContext.charmComponents} />
      <ul style={{ padding: 0 }}>
        {itemList}
      </ul>
    </Layout>
  );
};
