import React from 'react';

function ValorTable(props) {
  const { items } = props;
  const valorNames = items.map(item => <th>{item.props[0][1]}</th>);
  let valorProps = items.map(item => item.props.map((prop, i) => { if (i > 1) { return (<p>{prop[1]}</p>); } }));
  valorProps = valorProps.map((list, i) => <td key={i}>{list}</td>);
  return (
        <table className="u-full-width">
            <thead>
                <tr>
                    {valorNames}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {valorProps}
                </tr>
            </tbody>
        </table>
  );
}

export default ValorTable;
