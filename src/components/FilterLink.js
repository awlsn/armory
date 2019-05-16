import React from 'react';

function FilterLink(props) {
  const { itemCatName, clickFunction } = props;

  return (
        <li key={itemCatName}>
            <button type="button" data-filter={itemCatName} onClick={clickFunction}>{itemCatName}</button>
        </li>
  );
}

export default FilterLink;
