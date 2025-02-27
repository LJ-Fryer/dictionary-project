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
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        <input type="submit" />
      </form>
      <Search searchWord="mask" />
    </div>
  );
}
