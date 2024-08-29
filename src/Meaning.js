import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />
        <Examples examples={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
