import React from 'react';
import ItemProperties from './ItemProperties';

function UniqueItem(props) {
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

                <div key={item.index} className="item-right eight columns">
                    <ItemProperties key="unique-baseProps" itemProps={item.baseProps} />
                    <ItemProperties key="unique-props" itemProps={item.props} />
                </div>
            </div>
        </div>


  );
}

export default UniqueItem;
