import React from 'react';
import ItemProperties from './ItemProperties';


function Runeword(props) {
  const { item } = props;

  const categories = ` ${item.items.toString()}, ${item.name}`;
  return (

        <div className="item row" data-categories={categories}>

            <div className="row" id="{item.index}">

                <div className="item-left four columns">
                    <span className="item-name diablo_unique">{item.name}</span>
                    <div className="u-cf-ctr">
                        <span className="diablo_white inline;">Runes: </span>
                        <span className="diablo_unique inline;">{item.runes.reduce((runes, thisRune) => `${runes}, ${thisRune}`)}</span>
                    </div>
                    <span className="diablo_white">Sockets: {item.runes.length}</span>
                    <span className="diablo_white">cLvl Req: {item.lvlreq}</span>

                    <div className="u-cf-ctr">
                        <span className="diablo_white">Items: {item.items.reduce((items, thisItem) => `${items}, ${thisItem} `)}</span>
                    </div>
                </div>


                <div className="item-right eight columns">
                    <ItemProperties itemProps={item.props} />
                    <br />
                    {item.armorHelmProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Rune bonuses for: Helm</span>}
                    <ItemProperties itemProps={item.armorHelmProps} />
                    <br />
                    {item.weaponProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Rune bonuses for: Weapon</span>}
                    <ItemProperties itemProps={item.weaponProps} />
                    <br />
                    {item.shieldProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr block">Rune bonuses for: Shield</span>}
                    <ItemProperties itemProps={item.shieldProps} />

                </div>

            </div>
        </div>

  );
}


export default Runeword;
