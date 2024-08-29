import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <section className="images">
        <div className="row">
          {props.images.photos.map(function (img, index) {
            return (
              <div className="col-4" key={index}>
                <a href={img.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={img.src.original}
                    alt={img.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else return null;
}
