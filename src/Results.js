import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
