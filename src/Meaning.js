import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <ul className="Meaning ms-1">
      <li>{props.meaning.definition}</li>
    </ul>
  );
}
