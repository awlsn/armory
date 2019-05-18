import React, { useState, useEffect } from 'react';
import FilterLink from './FilterLink';

function RunewordFilters(props) {
  const { runewords } = props;
  const [type, setType] = useState('all');

  useEffect(() => {
    // some cases to match a little more loosely
    const isATypeMatch = (element) => {
      // straight match
      if (type.trim().toLowerCase() === element.trim().toLowerCase()) { return true; }
      // remove s (needs singular)
      if (type.trim().toLowerCase() === element.trim().toLowerCase().slice(0, -1)) { return true; }
      // add s (needs plural)
      if (type.trim().toLowerCase() === `${element.trim().toLowerCase()}s`) { return true; }
      return false;
    };

    const itemContainers = document.querySelectorAll('.item');

    if (type === 'all') {
      itemContainers.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      itemContainers.forEach((item) => {
        const itemCats = item.getAttribute('data-categories').split(',');
        const matches = [];
        // console.log(itemCats, type);
        if (itemCats.some(isATypeMatch)) {
          item.style.display = 'block';
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

  // make an array of all unique item types referenced by the runewords
  let itemTypeFilters = [];
  let itemNames = [];

  runewords.forEach((runeword) => {
    itemNames.push(runeword.name);
    runeword.items.forEach((itemType) => {
      if (!itemTypeFilters.includes(itemType)) {
        itemTypeFilters.push(itemType);
      }
    });
  });
  itemNames.sort();
  itemTypeFilters.sort();
  itemNames = itemNames.map(name => <FilterLink key={name} itemCatName={name} clickFunction={setFilterType} />);
  itemTypeFilters = itemTypeFilters.map(itemType => <FilterLink key={itemType} itemCatName={itemType} clickFunction={setFilterType} />);
  // itemTypeFilters = itemTypeFilters.map((list, i) => <ul key={i}>{list}</ul>);
  return (
        <>
            <div id="armorySubNav">
                Runewords: <button type="button" data-filter="all" onClick={setFilterType}> [Show All]</button>
                <br />
                By item type: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{itemTypeFilters}</ul>
                <br />
                By Runeword: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{itemNames}</ul>
            </div>
            <hr />
        </>
  );
}

export default RunewordFilters;
