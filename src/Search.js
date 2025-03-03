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
          <h5 className="text-center">Similar words</h5>
          <div className="d-flex justify-content-evenly">
            <span>stroll</span>
            <span>saunter</span>
            <span>amble</span>
            <span>hike</span>
            <span>stride</span>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
