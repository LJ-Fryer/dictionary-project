import React, { useEffect, useState } from "react";
import "./Search.css";

export default function Search(props) {
  console.log(props.userInput);

  if (props.results) {
    return (
      <div className="Search">
        <h3>{props.results.word}</h3>
        <p className="phoneticDisplay">/{props.results.phonetic}/</p>
        <div className="definitionBox">
          <p className="categoryDisplay mb-0">
            {props.results.meanings[0].partOfSpeech}
          </p>
          <p className="definitionDisplay">
            {props.results.meanings[0].definition}
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
