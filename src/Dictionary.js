import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Search from "./Search";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [dictionaryData, setDictionaryData] = useState(null);

  function handleResponse(response) {
    setDictionaryData(response.data);
    console.log(response.data);
  }

  function apiCall() {
    const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          className="searchBar"
          placeholder="Seek and ye shall find meaning.."
        />
        <input type="submit" value="Let's go" className="submitButton" />
      </form>
      <Search results={dictionaryData} />
    </div>
  );
}
