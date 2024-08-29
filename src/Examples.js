import React from "react";
import "./Dictionary.css";

export default function Examples(props) {
  if (props.examples) {
    return (
      <p className="examples">
        <strong>Example: </strong>
        {props.examples}
      </p>
    );
  } else return null;
}
