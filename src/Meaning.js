import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Meaning(props) {
  return (
    <div className="Meaning ms-1">
      <p>{props.meaning.definition}</p>
    </div>
  );
}
