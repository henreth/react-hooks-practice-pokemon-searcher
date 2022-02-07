import React from "react";

function Search({searchText, onSearchChange}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt"
          value={searchText}
          onChange={onSearchChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
