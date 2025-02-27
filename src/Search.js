import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [dictionaryData, setDictionaryData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.searchWord]);

  function apiCall() {
    let dummyWord = "flurry";
    const apiKey = "2394045tebc4f1e4ea3820407e9abod9";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${dummyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setLoaded(true);

    setDictionaryData({
      word: response.data.word,
      phonetic: response.data.phonetic,
      category: response.data.meanings[0].partOfSpeech,
      definition: response.data.meanings[0].definition,
    });
  }

  if (loaded) {
    return (
      <div className="Search">
        <h3>{dictionaryData.word}</h3>
        <p className="phoneticDisplay">/{dictionaryData.phonetic}/</p>
        <div className="definitionBox">
          <p className="categoryDisplay mb-0">{dictionaryData.category}</p>
          <p className="definitionDisplay">{dictionaryData.definition}</p>
        </div>
      </div>
    );
  } else {
    apiCall();
    return null;
  }
}
