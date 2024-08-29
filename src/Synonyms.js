import React from "react";
import "./Dictionary.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <p className="synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </p>
    );
  } else return null;
}
