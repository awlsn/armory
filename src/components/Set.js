import React from 'react';
import { set } from 'idb-keyval';
import ItemProperties from './ItemProperties';

function Set(props) {
  const { item } = props;
  const partialProps = item.partialProps.map(prop => <div>{prop}</div>);
  const fullProps = item.fullProps.map(prop => <div>{prop}</div>);
  const setItems = item.items.map(setItem => (
        <>
            <div className="set-item row" id={setItem.index}>
                <div className="item-left four columns">
                    <span className="item-graphic ">
                        <img src={`/static/images/items/${setItem.imageFile}`} alt="" />
                    </span>
                    <span className="item-name diablo_unique">{setItem.name}</span>
                    <span className="item-type">{setItem.item}</span>
                </div>
                <div className="item-right eight columns">
                    <ItemProperties itemProps={setItem.baseProps} />
                    <ItemProperties itemProps={setItem.props} />
                </div>
            </div>
            <hr />
        </>
  ));
  return (
        <div className="item row setItems" data-name={item.name}>
            <h5 className="diablo_green center">{item.name}</h5>
            <span className="item-property block center bold">Partial Set Bonus</span>
            <div className="diablo_green center">{partialProps}</div>
            <span className="item-property block center bold">Complete Set Bonus</span>
            <div className="diablo_gold center">{fullProps}</div>
            <hr />
            {setItems}


        </div>
  );
}

export default Set;
