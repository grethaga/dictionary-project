import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Images from "./Images";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [image, setImage] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleIMGResponse(response) {
    setImage(response.data);
  }

  function search() {
    let apiKey = "o0d0713230t29ff3bf6accc034c782b3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let IMGurl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(IMGurl).then(handleIMGResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={changeKeyword} />
        </form>
        <div className="hint">e.g. sunset, book, wine,...</div>
      </section>
      <Results results={results} />
      <Images images={image} />
    </div>
  );
}
