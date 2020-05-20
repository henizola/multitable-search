import React from "react";
import "./search.styles.scss";
import { SearchContext } from "../../context/context.context";

const Search = () => {
  return (
    <SearchContext.Consumer>
      {(context) => (
        <div className="search">
          <input
            type="text"
            placeholder="Filter by Country"
            onChange={(event) => context.setCountry(event.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Capital"
            onChange={(event) => context.setCapital(event.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Region"
            onChange={(event) => context.setRegion(event.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Sub-Region"
            onChange={(event) => context.setSubRegion(event.target.value)}
          />
        </div>
      )}
    </SearchContext.Consumer>
  );
};
export default Search;
