import React from 'react';

const ItemProperties = (props) => {
  const { itemProps, color } = props;
  if (itemProps) {
    const propList = itemProps.map((itemProp, i) => {
      let line = <span className={`block no-wrap diablo_${color}`}>{itemProp}</span>;
      if (Array.isArray(itemProp)) {
        const ps = [];
        // every other item in the set is a color - text, color, text, color, etc. length is unknown
        for (let i = 0; i < itemProp.length; i += 2) {
          ps.push({ color: itemProp[i], text: itemProp[i + 1] });
        }
        // the line is an assembly of these sets of 2
        line = ps.map((prop, i) => <span key={i} className={`no-wrap diablo_${prop.color}`}> {prop.text}</span>);
      }
      return (
        <span key={i} className="block item-property">{line}</span>
      );
    });
    return propList;
  }
  return '';
};
export default ItemProperties;
