import React, { useState } from "react";
import "./Dictionary.css";
import Search from "./Search";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search() {
    alert(`Searching for ${keyword}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          className="searchBar"
          placeholder="Seek and ye shall find meaning.."
        />
        <input type="submit" value="Let's go" className="submitButton" />
      </form>
      <Search searchWord="mask" />
    </div>
  );
}
