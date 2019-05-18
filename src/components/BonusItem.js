import React from 'react';
import ItemProperties from './ItemProperties';

function BonusItem(props) {
  const { item } = props;

  return (
        <div className="item row" data-name={item.name}>

            <div className="row" id={item.index}>

                <div className="item-left four columns">
                    <span className="item-graphic "><img alt="" src={`/images/items/${item.imageFile}`} /></span>
                    <span className="item-name diablo_unique">{item.name}</span>
                    <span>Lvl req: {item.rlvl}</span>
                </div>


                <div className="item-right eight columns">
                    <ItemProperties itemProps={item.props} />
                    <br />
                    {item.armorHelmProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Bonuses for: Helm</span>}
                    <ItemProperties itemProps={item.armorHelmProps} />
                    <br />
                    {item.weaponProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Bonuses for: Weapon</span>}
                    <ItemProperties itemProps={item.weaponProps} />
                    <br />
                    {item.shieldProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Bonuses for: Shield</span>}
                    <ItemProperties itemProps={item.shieldProps} />

                </div>

            </div>
        </div>
  );
}

export default BonusItem;
