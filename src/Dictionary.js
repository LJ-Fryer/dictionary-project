import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let word = "organ";
  const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
  let [keyword, setKeyword] = useState(null);

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleKeywordChange(event) {
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
    </div>
  );
}
