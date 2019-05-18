import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

const SecondPage = () => (
  <Layout>
    <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
    <ArmoryHeader />
    <p style={{ margin: '20px' }} className="center">Welcome to The Resurgence Armory!</p>
    <p className="center"> Please select a category above to continue.</p>
  </Layout>
);

export default SecondPage;
