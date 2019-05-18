import React, { useState, useEffect } from 'react';
import FilterLink from './FilterLink';

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
        const itemName = item.getAttribute('data-type');
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
    let filterType = e.target.getAttribute('data-filter');
    if (filterType === 'Primary') { filterType = 'Primary Charm Component'; }
    if (filterType === 'Secondary') { filterType = 'Secondary Charm Component'; }
    if (filterType === 'Tertiary') { filterType = 'Tertiary Charm Component'; }
    setType(filterType);
  };


  // itemTypeFilters = itemTypeFilters.map((list, i) => <ul key={i}>{list}</ul>);
  return (
        <>
            <div id="armorySubNav">
                Charm Components: <button type="button" data-filter="all" onClick={setFilterType}> [Show All]</button>
                <br />
                By Slot: <ul style={{ display: 'inline', paddingLeft: '10px' }} key="type-filters">
                    <FilterLink key="Primary" itemCatName="Primary" clickFunction={setFilterType} />
                    <FilterLink key="Secondary" itemCatName="Secondary" clickFunction={setFilterType} />
                    <FilterLink key="Tertiary" itemCatName="Tertiary" clickFunction={setFilterType} />
                         </ul>
            </div>
            <hr />
        </>
  );
}

export default SetFilters;
