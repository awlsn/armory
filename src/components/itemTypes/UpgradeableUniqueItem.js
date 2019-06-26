import React from 'react';
import ItemProperties from './ItemProperties';

function UpgradableUniqueItem(props) {
  const { items } = props;

  const initialTier = items[0].tier;

  const showItem = (e) => {
    // hide all unique listings
    items.forEach((item) => {
      document.getElementById(item.index).style.display = 'none';
    });
    // show the one we clicked
    document.getElementById(e.target.getAttribute('data-index')).style.display = 'block';
    // console.log(document.getElementById(e.target.getAttribute('data-index')));
  };

  const links = items.map(item => (
        <li key={item.index}>
            <a data-index={item.index} onClick={showItem}>{item.name}</a><br />{item.tier}
        </li>
  ));
  const itemData = items.map((item) => {
    const hidden = item.tier !== initialTier ? { display: 'none' } : {};

    return (
            <div id={item.index} key={item.index} className="row tier" data-tier={item.tier} style={hidden}>
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
    );
  });

  const categories = `${items[0].subCategories.toString()},${items[0].item},${items[0].category}`;

  return (

        <div className="item row" data-categories={categories}>

            <div className="row">

                <div className="row">
                    <ul className="upgradeItems">
                        {links}
                    </ul>
                </div>
                <div className="uniques">
                    {itemData}
                </div>


            </div>
        </div>


  );
}


export default UpgradableUniqueItem;
