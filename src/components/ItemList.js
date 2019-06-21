import React, { useState, useEffect } from 'react';


const ItemList = (props) => {
  const { items } = props;

  const [loadedList, setLoadedList] = useState(<div className="center"><h6>Loading...</h6><br /><img src="/images/chaos-barbhireable.gif" /></div>);


  useEffect(() => {
    setLoadedList(items);
    /* setTimeout(() => {
              setLoadedList(allItems);
            }, 50); */
  }, []);


  return <>{loadedList}</>;
};

export default ItemList;
