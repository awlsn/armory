import React from 'react';
import ItemProperties from './ItemProperties';

const CraftItem = (props) => {
  const { item } = props;

  return (

        <div className="item row">

            <div className="row" id="{item.index}">

                <div className="item-left four columns">
                    <span className="item-graphic "><img alt="" src={item.imageFile} /></span>
                    <span className="item-name diablo_unique">{item.name}</span>
                    <span className="item-type capitalize">{item.type}</span>
                </div>

                <div className="item-right eight columns">
                    <ItemProperties itemProps={item.props} />


                </div>
            </div>
        </div>


  );
};

export default CraftItem;
