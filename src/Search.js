import React from "react";
import Meaning from "./Meaning";
import "./Search.css";

export default function Search(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Search">
        <h3>{props.results.word}</h3>
        <p className="phoneticDisplay">/{props.results.phonetic}/</p>
        <div className="definitionBox">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
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
