/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import ReactTooltip from 'react-tooltip';

const HoverItem = (props) => {
  const { item, type } = props;

  if (item) {
    let imgUrl = `/images/items/${item.imageFile}`;

    if (type === 'hardcoded') {
      imgUrl = `/images/${item.imageFile}`;
    }

    // simple items do not have color details in their props, handle them separately
    if (type === 'simple') {
      imgUrl = `/images/${item.imageFile}`;

      return (
        <>
          <a data-tip data-for={item.index}>
            <img alt="" src={imgUrl} />{item.name}
          </a>
          <ReactTooltip id={item.index} effect="solid">
            <div>
              <span className="diablo_white block">{item.text}</span>
            </div>
          </ReactTooltip>
        </>
      );
    }
    // regular items have props in an array: color, prop text, color, prop text, etc.
    return (
      <>
        <a data-tip data-for={item.index}>
          <img alt="" src={imgUrl} />
        </a>
        <ReactTooltip id={item.index} effect="solid">
          <div>

            {type !== 'hardcoded'
              && <span className="diablo_unique block">{item.name}<br />{item.item}</span>
            }

            {type === 'hardcoded'
              && <span className={`diablo_${item.name[0]} block`}>{item.name[1]}</span>
            }


            {type !== 'charm'
              && <BaseProps item={item} />
            }
            <MagicProps item={item} />
          </div>
        </ReactTooltip>
      </>
    );
  }
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
      line = ps.map((prop, i) => <span key={i} className={`no-wrap diablo_${prop.color}`}> {prop.text}</span>);
    }
    return (
      <span key={i} className="item-property block">{line}</span>
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
      line = ps.map((prop, i) => <span key={i} className={`no-wrap diablo_${prop.color}`}> {prop.text}</span>);
    }
    return (
      <span key={i} className="item-property block">{line}</span>
    );
  });
  return magicPropList;
};


export default HoverItem;
