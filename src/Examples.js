import React from "react";
import "./Dictionary.css";

export default function Examples(props) {
  if (props.examples) {
    return <p className="examples">"{props.examples}"</p>;
  } else return null;
}
