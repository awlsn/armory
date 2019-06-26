import React, { useState, useEffect } from 'react';


const SearchBar = (props) => {
  const { masterItemList, setMatchedItemList, query } = props;

  const [searchText, setSearchText] = useState(' ');
  const [prevSearchText, setPrevSearchText] = useState(' ');


  useEffect(() => {
    if (document.getElementById('searchText').value === '') {
      const querries = query.split('/');
      if (querries[1] === 'search') {
        const actualQuery = decodeURI(querries[2]);
        setSearchText({ searchText: actualQuery });
      }
    }
    if (searchText.searchText !== prevSearchText.prevSearchText) {
      doSearch();
    }
  });


  // RegExp-escapes all special characters in the given string.
  function regExpEscape(s) {
    return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  }
  // Creates a RegExp from the given string, converting asterisks to .* expressions, and
  // escaping all other characters.
  function wildcardToRegExp(s) {
    const parsedString = `^${s.split(/\*+/).map(regExpEscape).join('.*')}$`;
    return new RegExp(parsedString);
  }
  function poundToRegExp(s) {
    const parsedString = s.split(/#+/).map(regExpEscape).join('\\d+');
    return new RegExp(parsedString);
  }


  function findItems(items) {
    const text = searchText.searchText.toLowerCase();

    const result = items.filter(item => item.props.some((prop) => {
      const itemMod = prop[1].toLowerCase();

      return poundToRegExp(text).test(itemMod) || wildcardToRegExp(text).test(itemMod);
    }));

    return result;
  }


  function findSimpleItems(items) {
    const text = searchText.searchText.toLowerCase();

    const result = items.filter(item => item.props.some((prop) => {
      const itemMod = prop.toLowerCase();
      return poundToRegExp(text).test(itemMod) || wildcardToRegExp(text).test(itemMod);
    }));

    return result;
  }

  function findFullSetItems(items) {
    const text = searchText.searchText.toLowerCase();

    const result = items.filter((item) => {
      const fullPropResult = item.fullProps.some((prop) => {
        const itemMod = prop.toLowerCase();
        return poundToRegExp(text).test(itemMod) || wildcardToRegExp(text).test(itemMod);
      });

      const partialSetResult = item.partialProps.some((prop) => {
        const itemMod = prop.toLowerCase();
        return poundToRegExp(text).test(itemMod) || wildcardToRegExp(text).test(itemMod);
      });

      return fullPropResult || partialSetResult;
    });

    return result;
  }

  function findSetItems(items) {
    const text = searchText.searchText.toLowerCase();
    // flatten set array - set items are stored in Set objects but I just want to search individual items for now
    const setItems = items.map(set => set.items);
    const allSetItems = setItems.concat.apply([], setItems);

    const result = allSetItems.filter(item => item.props.some((prop) => {
      const itemMod = prop[1].toLowerCase();
      return poundToRegExp(text).test(itemMod) || wildcardToRegExp(text).test(itemMod);
    }));

    return result;
  }


  const doSearch = () => {
    // [...new Set(masterItemList.runewordItems)].forEach((item) => console.log(item.items));

    const matchedItemList = {};
    matchedItemList.uniqueItems = findItems(masterItemList.uniqueItems);
    matchedItemList.runewordItems = findItems(masterItemList.runewords);
    matchedItemList.augmentItems = findItems(masterItemList.augments);
    matchedItemList.charmComponents = findItems(masterItemList.charmComponents);
    matchedItemList.baseItems = findSimpleItems(masterItemList.baseItems);
    matchedItemList.crafting = findSimpleItems(masterItemList.crafting);
    matchedItemList.affixes = findSimpleItems(masterItemList.affixes);

    matchedItemList.setItems = findSetItems(masterItemList.setItems);
    matchedItemList.fullSetItems = findFullSetItems(masterItemList.setItems);
    setPrevSearchText({ prevSearchText: searchText.searchText });
    setMatchedItemList(matchedItemList);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const text = document.getElementById('searchText').value;
    setSearchText({ searchText: text });
    // const stay = window.scrollY;
    // window.location.hash = `#/search/${text}`;
    window.history.pushState(null, null, `#/search/${text}`);
    // console.log(searchText.searchText);
  };


  return (

    <div id="armorySubNav" className="row" style={{ marginBottom: '50px' }}>
      <form className="itemSearchForm u-full-width" onSubmit={submitForm}>
        <input id="searchText" className="itemSearch" placeholder={searchText.searchText} type="text" />
        <button
          id="searchSubmit"
          type="submit"
          style={{
            marginLeft: '10px', border: '1px solid black', padding: '6px 10px', borderRadius: '4px', background: 'rgba(150, 150, 150, 0.3)',
          }}
        ><h6 style={{ margin: '0px' }}>Search</h6>
        </button>
        <p>
          Search items by their properties: * are wildcards or # will match any number.
        </p>

      </form>


    </div>

  );
};


export default SearchBar;
