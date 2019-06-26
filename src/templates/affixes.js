import React from 'react';

import Affix from '../components/itemTypes/Affix';
import AffixFilters from '../components/itemTypes/AffixFilters';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import ArmoryHeader from '../components/ArmoryHeader';

export default ({ pageContext }) => {
  const itemList = pageContext.affixes.map(item => <Affix key={item.index} item={item} />);
  const toggleExpando = (e) => {
    const { style } = document.querySelector('.expando');
    if (style.display === 'block') { style.display = 'none'; return; }
    if (style.display === 'none') { style.display = 'block'; }
  };
  return (
    <Layout>
      <SEO title="Diablo 2 Resurgence mod - Item Armory" keywords={['Diablo II', 'Resurgence', 'Armory']} />
      <ArmoryHeader />
      <AffixFilters items={pageContext.affixes} />

      <div id="armoryContent">
        <button type="button" onClick={toggleExpando}><h6 style={{ margin: '5px' }}>Show/Hide Terminology</h6></button>
        <div className="expando" style={{ display: 'none' }}>
          Group: Similar affixes are grouped. Only one prefix or suffix can be picked from a group by the randomizer.<br />
          *alvl:  Affix level.<br />
          rlvl: Required level.<br />
          Freq: The spawn frequency for affixes in the same group. Higher Freq affixes will spawn more often.<br />
          Items: List of items that can spawn this affix.<br />
          Excluded Items: List of items that cannot spawn this affix.<br />
          ilvl: Item level.<br />
          qlvl: Quality level.<br />
          mlvl: Magic level.<br /><br />

          *Affix level of an item is determined using the following routine (using integer numbers only):<br />
          If (ilvl &gt; 99) then ilvl=99.<br />
          If (qlvl &gt; ilvl) then ilvl=qlvl.<br />
          If (mlvl &gt; 0) then alvl=ilvl+mlvl; skip to step 5.<br />
          If (ilvl &lt; (99-qlvl/2)) then alvl=ilvl-qlvl/2, else alvl=2*ilvl-99<br />
          If (alvl &gt; 99) then alvl=99<br />
        </div>

        <table style={{ tableLayout: 'fixed', borderCollapse: 'collapse' }}>
          <thead>
            <tr><th>Name</th><th>Type</th><th>Group</th><th>Property</th><th>aLvl</th><th>rLvl</th><th>Freq</th><th>Items</th><th>Excluded Items</th></tr>
          </thead>
          <tbody>
            {itemList}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
