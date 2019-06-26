import React from 'react';
import Loadable from 'react-loadable';

import UniqueItem from '../components/itemTypes/UniqueItem';
import UpgradeableUniqueItem from '../components/itemTypes/UpgradeableUniqueItem';
import UniqueFilters from '../components/itemTypes/UniqueFilters';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';


const LoadableComponent = Loadable({
  loader: () => import('../components/UniqueItemList'),
  loading() {
    return <div className='center'><h6>Loading...</h6><br /><img src="/images/chaos-barbhireable.gif" /></div>;
  },
});

export default ({ pageContext }) => (
  <Layout>
    <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
    <ArmoryHeader />
    <UniqueFilters itemFilters={pageContext.itemFilters} />


    <ul style={{ padding: 0 }}>
      <LoadableComponent items={pageContext.uniqueItems} />
    </ul>

  </Layout>
);



