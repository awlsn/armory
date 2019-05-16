import React, { useState, useEffect } from 'react';
import FilterLink from './FilterLink';

function UniqueFilters(props) {
  const { itemFilters } = props;
  let output = [];
  const [tier, setTier] = useState('default');
  const [type, setType] = useState('all');

  useEffect(() => {
    // update tier filter

    const isATierMatch = element => (tier !== 'default' && tier.toLowerCase === element.toLowerCase);
    const isATypeMatch = (element) => {
      // straight match
      if (type.trim().toLowerCase() === element.trim().toLowerCase()) { return true; }
      // remove s (needs singular)
      if (type.trim().toLowerCase() === element.trim().toLowerCase().slice(0, -1)) { return true; }
      // add s (needs plural)
      if (type.trim().toLowerCase() === `${element.trim().toLowerCase()}s`) { return true; }
      return false;
    };

    const handleTier = (item) => {
      if (tier !== 'default') {
        let tierNodeList = [];
        let upgradeable = false;

        // upgradeable items need to be accessed differently
        if (item.querySelector('.tier') && item.querySelector('.tier').hasAttribute('data-tier')) {
          tierNodeList = item.querySelectorAll('.tier');
          upgradeable = true;
        }
        // and non-upgradeable items are simply the item node we already have
        if (item.hasAttribute('data-tier')) {
          tierNodeList = [...item];
        }

        tierNodeList.forEach((tierNode) => {
          if (tierNode && tierNode.getAttribute('data-tier') === tier) {
            // we hide all sinling items first for upgradeable unique sets
            if (upgradeable) { tierNode.parentNode.childNodes.forEach((siblingNode) => { siblingNode.style.display = 'none'; }); }
            // console.log(tierNode);
            // console.log(tierNode.getAttribute('data-tier'), tier);
            tierNode.style.display = 'block';
            // tierNode.style.border = '1px solid red';
          } else {
            tierNode.style.display = 'none';
          }
        });

        // make sure we have a tier on the node (maybe the item class on something that isn't an item)
      } else {
        // ignore tier
        item.style.display = 'block';
      }
    };

    const itemContainers = document.querySelectorAll('.item');

    if (type === 'all') {
      itemContainers.forEach((item) => {
        item.style.display = 'block';
      });
    } else {
      itemContainers.forEach((item) => {
        /* let tierNode = 0;
        if (item.hasAttribute('data-tier')) {
          tierNode = item.getAttribute('data-tier');
        }
        if (item.querySelector('.tier') && item.querySelector('.tier').hasAttribute('data-tier')) {
          tierNode = item.querySelector('.tier').getAttribute('data-tier');
        } */
        // console.log('checking...', tier, tierNode, type);

        const itemCats = item.getAttribute('data-categories').split(',');
        const matches = [];
        // console.log(itemCats, type);
        if (itemCats.some(isATypeMatch)) {
          handleTier(item);
        } else {
          item.style.display = 'none';
        }
      });
    }
  });


  const getCategoryByName = name => itemFilters.itemCats.find(cat => cat.itemCatName === name);

  const setFilterTier = (e) => {
    // add a different class to only target tier level elements

    /* const itemContainers = document.querySelectorAll('.tier');
    const filterType = e.target.getAttribute('data-filtertier');
    itemContainers.forEach((item) => {
      // console.log(item.getAttribute('data-tier'), filterType);
      if (item.getAttribute('data-tier') === filterType) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }); */
    setTier(e.target.getAttribute('data-filtertier'));
  };

  const setFilterType = (e) => {
    let filterType = e.target.getAttribute('data-filter');
    if (filterType === 'Quiver') { filterType = 'Missile'; }
    if (filterType === 'Shield') { filterType = 'Any Shield'; }
    if (filterType === 'Barbarian') { filterType = 'Barbarian Item'; }
    if (filterType === 'Amazon') { filterType = 'Amazon Item'; }
    if (filterType === 'Sorceress') { filterType = 'Sorceress Item'; }
    if (filterType === 'Druid') { filterType = 'Druid Item'; }
    if (filterType === 'Necromancer') { filterType = 'Necromancer Item'; }
    if (filterType === 'Paladin') { filterType = 'Paladin Item'; }
    if (filterType === 'Assassin') { filterType = 'Assassin Item'; }
    if (filterType === 'Nephalem Valors') { filterType = "Nephalem's Valour"; }
    setTier('default');
    setType(filterType);
    /* const itemContainers = document.querySelectorAll('.item');
    // TODO there seems to be a bug with unique necro shields that start at excep?
    if (filterType === 'all') {
      itemContainers.forEach((item) => { item.style.display = 'block'; });
    } else {
      itemContainers.forEach((item) => {
        const itemCats = item.getAttribute('data-categories').split(',');
        if (itemCats.includes(filterType)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    } */
  };


  const uniqueCategory = getCategoryByName('Uniques').itemCatSubItems[0];

  const meleeUniques = uniqueCategory.weapon.map((filter) => {
    if (filter.itemCatMeleeRanged === 'melee') {
      return <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />;
    }
  });
  output.push(meleeUniques);

  const rangedUniques = uniqueCategory.weapon.map((filter) => {
    if (filter.itemCatMeleeRanged === 'ranged') {
      return <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />;
    }
  });
  output.push(rangedUniques);

  const armors = uniqueCategory.armor.map(filter => <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />);
  // const circlets = uniqueCategory.circlets.map(filter => <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={toggleVisibility} />);
  const jewelry = uniqueCategory.jewelry.map(filter => <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />);
  const row = armors.concat(jewelry);
  output.push(row);

  const classTypes = uniqueCategory.class.map(filter => <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />);
  output.push(classTypes);

  const others = uniqueCategory.other.map(filter => <FilterLink key={filter.itemCatName} itemCatName={filter.itemCatName} clickFunction={setFilterType} />);
  output.push(others);

  // output.push(<br />);
  output = output.map((list, i) => <ul key={i}>{list}</ul>);

  return (
    <>
      <div id="armorySubNav">
        Uniques:
       <button type="button" data-filter="all" onClick={setFilterType}>[Show All]</button><br />
        {output}

      </div>
      <hr />
      <div className="upgrade row">
        <ul className="upgradeItems">
          <li><button type="button" data-filtertier="Normal" onClick={setFilterTier}>Show only Basic</button></li>
          <li><button type="button" data-filtertier="Exceptional" onClick={setFilterTier}>Show only Exceptional</button></li>
          <li><button type="button" data-filtertier="Elite" onClick={setFilterTier}>Show only Elite</button></li>
        </ul>
      </div>
    </>
  );
}

export default UniqueFilters;
