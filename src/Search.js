import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Search.css";

export default function Search(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Search">
        <h3>{props.results.word}</h3>
        <p className="phoneticDisplay">/{props.results.phonetic}/</p>
        <div className="definitionBox mb-2">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
        <div className="synonymsBox">
          <h5 className="text-center mb-3">
            <em>Synonyms</em>
          </h5>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Synonyms synonyms={meaning.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
