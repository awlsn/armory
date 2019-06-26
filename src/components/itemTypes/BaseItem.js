import React from 'react';
import ItemProperties from './ItemProperties';

function BaseItem(props) {
  const { item } = props;
  const categories = ` ${item.subCategories.toString()}, ${item.item}, ${item.category}`;
  return (

    <div className="item row tier" data-categories={categories} data-tier={item.tier}>

      <div className="row" id="{item.index}">

        <div className="item-left four columns">
          <span className="item-graphic "><img alt="" src={`/images/items/${item.imageFile}`} /></span>
          <span className="item-name diablo_unique">{item.name}</span>
          <span className="item-type">{item.item}</span>
        </div>

        <div className="item-right eight columns">
          <ItemProperties key="generic-baseProps" color="white" itemProps={item.baseProps} />
          <ItemProperties key="generic-props" color="blue" itemProps={item.props} />


        </div>
      </div>
    </div>


  );
}

export default BaseItem;
