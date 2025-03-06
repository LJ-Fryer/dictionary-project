import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import "./Search.css";

export default function Search(props) {
  if (props.results) {
    if (props.results.status) {
      return (
        <div className="text-danger">Oops, can't find that. Try again</div>
      );
    } else {
      return (
        <div className="Search">
          <h3>{props.results.word}</h3>
          <p className="mt-2 mb-2">/{props.results.phonetic}/</p>
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
            <h5 className="mt-3 mb-1 ms-1">Synonyms</h5>
            <div className="synonymsBox d-flex flex-wrap">
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
    }
  } else {
    return null;
  }
}
