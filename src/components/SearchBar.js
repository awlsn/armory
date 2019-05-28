import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { masterItemList, setMatchedItemList } = this.props;

    const doSearch = (e) => {
      e.preventDefault();

      const text = document.getElementById('searchText').value;


      // [...new Set(masterItemList.runewordItems)].forEach((item) => console.log(item.items));

      const matchedItemList = {};
      matchedItemList.uniqueItems = findItems(masterItemList.uniqueItems, text);
      matchedItemList.runewordItems = findItems(masterItemList.runewords, text);
      matchedItemList.setItems = findSetItems(masterItemList.setItems, text);
      matchedItemList.fullSetItems = findFullSetItems(masterItemList.setItems, text);
      matchedItemList.augmentItems = findItems(masterItemList.augments, text);
      matchedItemList.baseItems = findBaseItems(masterItemList.baseItems, text);
      matchedItemList.charmComponents = findItems(masterItemList.charmComponents, text);
      // matchedItemList.crafting = findBaseItems(masterItemList.crafting, text);
      matchedItemList.affixes = findBaseItems(masterItemList.affixes, text);
      setMatchedItemList(matchedItemList);
    };

    function findItems(items, searchText) {
      searchText = searchText.toLowerCase();

      const result = items.filter(item => item.props.some((prop) => {
        const itemMod = prop[1].toLowerCase();

        searchText = searchText.toLowerCase();
        // parseWildCards(searchText);
        // return parseWildCards(searchText).test(itemMod);
        // return new RegExp(searchText).test(itemMod);
        return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod);
      }));

      return result;
    }


    function findBaseItems(items, searchText) {
      searchText = searchText.toLowerCase();

      const result = items.filter(item => item.props.some((prop) => {
        const itemMod = prop.toLowerCase();
        return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod);
      }));

      return result;
    }

    function findFullSetItems(items, searchText) {
      searchText = searchText.toLowerCase();

      const result = items.filter((item) => {
        const fullPropResult = item.fullProps.some((prop) => {
          const itemMod = prop.toLowerCase();
          return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod);
        });

        const partialSetResult = item.partialProps.some((prop) => {
          const itemMod = prop.toLowerCase();
          return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod);
        });

        return fullPropResult || partialSetResult;
      });

      return result;
    }

    function findSetItems(items, searchText) {
      searchText = searchText.toLowerCase();
      // flatten set array - set items are stored in Set objects but I just want to search individual items for now
      const setItems = items.map(set => set.items);
      const allSetItems = setItems.concat.apply([], setItems);

      const result = allSetItems.filter(item => item.props.some((prop) => {
        const itemMod = prop[1].toLowerCase();
        return poundToRegExp(searchText).test(itemMod) || wildcardToRegExp(searchText).test(itemMod);
      }));

      return result;
    }


    // via donmccurdy : https://gist.github.com/donmccurdy/6d073ce2c6f3951312dfa45da14a420f
    // Creates a RegExp from the given string, converting asterisks to .* expressions, and escaping all other characters.
    function wildcardToRegExp(s) {
      const parsedString = `^${s.split(/\*+/).map(regExpEscape).join('.*')}$`;
      // console.log(parsedString)
      return new RegExp(parsedString);
    }
    // RegExp-escapes all characters in the given string.
    function regExpEscape(s) {
      return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    }
    function poundToRegExp(s) {
      const parsedString = s.split(/#+/).map(regExpEscape).join('\\d+');
      // console.log(parsedString)
      return new RegExp(parsedString);
    }
    // <label><input type="checkbox" /> Enable full regex</label>
    return (
      <div id="armorySubNav" className="row" style={{ marginBottom: '50px' }}>
        <form className="itemSearchForm u-full-width" onSubmit={doSearch}>
          <input id="searchText" className="itemSearch" placeholder="Search items by their properties" type="text" />
          <button
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
  }
}

export default SearchBar;
