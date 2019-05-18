import React, { useState, useEffect } from 'react';
import FilterLink from './FilterLink';

function AffixFilters(props) {
  const { items } = props;
  const [type, setType] = useState('all');

  useEffect(() => {
    // update tier filter


    const isATypeMatch = (element) => {
      // straight match
      if (type.trim().toLowerCase() === element.trim().toLowerCase()) { return true; }
      // remove s (needs singular)
      if (type.trim().toLowerCase() === element.trim().toLowerCase().slice(0, -1)) { return true; }
      // add s (needs plural)
      if (type.trim().toLowerCase() === `${element.trim().toLowerCase()}s`) { return true; }
      return false;
    };


    const itemContainers = document.querySelectorAll('.affixItem');

    if (type === 'all') {
      itemContainers.forEach((item) => {
        item.style.display = 'table-row';
      });
    } else {
      itemContainers.forEach((item) => {
        const itemCats = item.getAttribute('data-categories').split(',');
        const matches = [];

        if (itemCats.some(isATypeMatch)) {
          item.style.display = 'table-row';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });

  const setFilterType = (e) => {
    const filterType = e.target.getAttribute('data-filter');

    setType(filterType);
  };

  let affixTypes = [];
  let affixColors = [];
  let affixItems = [];

  items.forEach((item) => {
    if (!affixTypes.includes(item.affType)) { affixTypes.push(item.affType); }
    if (!affixColors.includes(item.color)) { affixColors.push(item.color); }
    item.items.forEach((affixItem) => {
      if (!affixItems.includes(affixItem)) { affixItems.push(affixItem); }
    });
  });
  affixTypes.sort();
  affixColors.sort();
  affixItems.sort();
  affixTypes = affixTypes.map(affTypes => <FilterLink key={affTypes} itemCatName={affTypes} clickFunction={setFilterType} />);
  affixColors = affixColors.map(color => <FilterLink key={color} itemCatName={color} clickFunction={setFilterType} />);
  affixItems = affixItems.map(item => <FilterLink key={item} itemCatName={item} clickFunction={setFilterType} />);

  return (
        <>
            <div id="armorySubNav">
                Affixes: <button type="button" data-filter="all" onClick={setFilterType}>[Show All]</button>
                <br />
                By Type: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{affixTypes}</ul>
                <br />
                By Item: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{affixItems}</ul>
                <br />
                By Rarity: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{affixColors}</ul>

            </div>
            <hr />
        </>
  );
}

export default AffixFilters;
