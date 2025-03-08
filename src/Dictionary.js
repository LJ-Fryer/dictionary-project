import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Images from "./Images";
import Search from "./Search";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [dictionaryData, setDictionaryData] = useState(null);
  let [images, setImages] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setDictionaryData(response.data);
  }

  function handleImagesResponse(response) {
    setImages(response.data.photos);
  }

  function apiCall() {
    const dictionaryApiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let dictionaryApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    const imagesApiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
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
        <form onSubmit={handleSubmit} className="inputWrapper">
          <input
            type="text"
            onChange={handleKeywordChange}
            className="inputBar"
            placeholder="Seek and ye shall find meaning.."
          />
          <input type="submit" value="🔍" className="submitButton" />
        </form>
        <Search results={dictionaryData} />

        <Images images={images} />
        <em>
          <p className="mt-4">
            Images supplied by{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>
          </p>
        </em>
      </div>
    );
  } else {
    load();
    return null;
  }
}
