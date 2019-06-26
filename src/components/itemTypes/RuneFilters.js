import React, { useState, useEffect } from 'react';
import FilterLink from '../FilterLink';

function SetFilters(props) {
  const { items } = props;
  const [type, setType] = useState('all');

  useEffect(() => {
    const itemContainers = document.querySelectorAll('.item');

    if (type === 'all') {
      itemContainers.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      itemContainers.forEach((item) => {
        const itemName = item.getAttribute('data-name');
        const matches = [];
        // console.log(itemCats, type);
        if (itemName.trim().toLowerCase() === type.trim().toLowerCase()) {
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

  let itemNames = [];

  items.forEach((item) => {
    itemNames.push(item.name);
  });
  itemNames.sort();

  itemNames = itemNames.map(name => <FilterLink key={name} itemCatName={name} clickFunction={setFilterType} />);

  // itemTypeFilters = itemTypeFilters.map((list, i) => <ul key={i}>{list}</ul>);
  return (
        <>
            <div id="armorySubNav">
                Runes: <button type="button" data-filter="all" onClick={setFilterType}> [Show All]</button>
                <br />
                By Name: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">{itemNames}</ul>
            </div>
            <hr />
        </>
  );
}

export default SetFilters;
