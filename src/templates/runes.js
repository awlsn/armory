import React from 'react';

import Rune from '../components/BonusItem';
import RuneFilters from '../components/RuneFilters';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

export default ({ pageContext }) => {
  const itemList = pageContext.runes.map(item => <Rune key={item.index} item={item} />);

  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <RuneFilters items={pageContext.runes} />
      <ul style={{ padding: 0 }}>
        {itemList}
      </ul>
    </Layout>
  );
};
