import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Search.css";

export default function Search(props) {
  if (props.results) {
    return (
      <div className="Search">
        <h3>{props.results.word}</h3>
        <p className="phoneticDisplay">/{props.results.phonetic}/</p>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="definitionBox mb-2">
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>

        <section>
          <h5 className="mt-3 mb-1 ms-3">
            <em>Synonyms</em>
          </h5>
          <div className="synonymsBox d-inline-flex">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Synonyms synonyms={meaning.synonyms} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
