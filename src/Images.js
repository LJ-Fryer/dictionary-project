import React from "react";
import "./Images.css";
import axios from "axios";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images d-flex mt-5 me-2 ms-2 justify-content-between">
        {props.images.slice(0, 3).map(function (image, index) {
          return (
            <img
              src={image.src.original}
              key={index}
              alt={image.alt}
              className="image-fluid"
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
