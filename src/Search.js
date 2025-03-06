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
      const groupedMeanings = props.results.meanings.reduce((acc, meaning) => {
        const { partOfSpeech } = meaning;
        if (!acc[partOfSpeech]) {
          acc[partOfSpeech] = [];
        }
        acc[partOfSpeech].push(meaning);
        return acc;
      }, {});

      return (
        <div className="Search">
          <h3>{props.results.word}</h3>
          <p className="mt-2 mb-2">/{props.results.phonetic}/</p>
          <section>
            {Object.entries(groupedMeanings).map(
              ([partOfSpeech, meanings], index) => (
                <div key={index} className="definitionBox mb-2">
                  <p className="categoryDisplay mb-0">{partOfSpeech}</p>
                  {meanings.map((meaning, idx) => (
                    <Meaning key={idx} meaning={meaning} />
                  ))}
                </div>
              )
            )}
          </section>

          <section>
            <h5 className="mt-3 mb-1 ms-1">Synonyms</h5>
            <div className="synonymsBox d-flex flex-wrap">
              {props.results.meanings.map((meaning, index) => {
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
