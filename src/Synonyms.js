import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <section className="Synonyms">
        <p>
          {props.synonyms.map((synonym, index) => {
            return <div key={index}>{synonym}</div>;
          })}
        </p>
      </section>
    );
  } else {
    return null;
  }
}
