import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Images from "./Images";
import Search from "./Search";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [dictionaryData, setDictionaryData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDictionaryData(response.data);
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

  function load() {
    setLoaded(true);
    apiCall();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            className="searchBar"
            placeholder="Seek and ye shall find meaning.."
          />
          <input type="submit" value="Let's go" className="submitButton" />
        </form>
        <Search results={dictionaryData} />

        <Images keyword={keyword} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
