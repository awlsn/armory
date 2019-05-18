import React from 'react';

function Affix(props) {
  const { item } = props;
  const itemProps = item.props.map(prop => <>{prop} <br /></>);
  const itemList = item.items.map(item => <>{item} <br /></>);
  const eItemList = item.eItems.map(item => <>{item} <br /></>);
  const categories = ` ${item.items.toString()}, ${item.color}, ${item.affType}`;
  return (
        <tr className={`affixItem diablo_${item.color}`} data-categories={categories}>
            <td>{item.name}</td>
            <td>{item.affType}</td>
            <td>{item.group}</td>
            <td>{itemProps}</td>
            <td>{item.alvl}</td>
            <td>{item.rlvl}</td>
            <td>{item.freq}</td>
            <td>{itemList}</td>
            <td>{eItemList}</td>
        </tr>
  );
}

export default Affix;
