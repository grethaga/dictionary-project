import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition}
        <br />
        <Examples examples={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
