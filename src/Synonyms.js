import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms d-inline-block">
        <li>
          {props.synonyms.map(function (synonym, index) {
            return <div key={index}>{synonym}</div>;
          })}
        </li>
      </ul>
    );
  } else {
    return null;
  }
}
