import React from 'react';

const HoverItem = (props) => {
  const { item, type } = props;

  // console.log(item);
  // handle props and baseProps
  // check if prop isArray, if it is handle it as [color,prop] (destructure it?)
  // else assume baseProp = white prop = blue?
  if (item) {
    const propList = item.props.map((itemPropSet, i) => (
      <span key={i} className="item-property">
        <div className="no-wrap diablo_blue">{itemPropSet}</div>
      </span>
    ),
    );
    if (type === 'unique') {
      const imgUrl = `/images/items/${item.imageFile}`;

      return (
        <a href="javascript:void(0)" className="tooltip">

          <img alt="" src={imgUrl} />
          <div>
            <span className="diablo_unique block">{item.name}<br />{item.item}</span>
            <BaseProps item={item} />
            <MagicProps item={item} />
          </div>
        </a>
      );
    }
    if (type === 'hardcoded') {
      const imgUrl = `/images/${item.imageFile}`;

      return (
        <a href="javascript:void(0)" className="tooltip">

          <img alt="" src={imgUrl} />
          <div>
            <span className={`diablo_${item.name[0]} block`}>{item.name[1]}</span>
            <BaseProps item={item} />
            <MagicProps item={item} />
          </div>
        </a>
      );
    }
  }
  return '';
};


const BaseProps = (props) => {
  const { item } = props;

  const basePropList = item.baseProps.map((itemProp, i) => {
    let line = <span className="no-wrap diablo_white block">{itemProp}</span>;
    if (Array.isArray(itemProp)) {
      const ps = [];
      // every other item in the set is a color - text, color, text, color, etc. length is unknown
      for (let i = 0; i < itemProp.length; i += 2) {
        ps.push({ color: itemProp[i], text: itemProp[i + 1] });
      }
      // the line is an assembly of these sets of 2
      line = ps.map((prop, i) => <span key={i} className={`block no-wrap diablo_${prop.color}`}> {prop.text}</span>);
    }
    return (
      <span key={i} className="item-property">{line}</span>
    );
  });
  return basePropList;
};

const MagicProps = (props) => {
  const { item } = props;

  const magicPropList = item.props.map((itemProp, i) => {
    let line = <span className="no-wrap diablo_blue block">{itemProp}</span>;
    if (Array.isArray(itemProp)) {
      const ps = [];
      // every other item in the set is a color - text, color, text, color, etc. length is unknown
      for (let i = 0; i < itemProp.length; i += 2) {
        ps.push({ color: itemProp[i], text: itemProp[i + 1] });
      }
      // the line is an assembly of these sets of 2
      line = ps.map((prop, i) => <span key={i} className={`block no-wrap diablo_${prop.color}`}> {prop.text}</span>);
    }
    return (
      <span key={i} className="item-property">{line}</span>
    );
  });
  return magicPropList;
};


export default HoverItem;
