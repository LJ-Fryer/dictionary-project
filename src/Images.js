import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images d-flex mt-5 me-2 ms-2 justify-content-between">
        {props.images.slice(0, 3).map(function (image, index) {
          return (
            <a
              href={image.src.original}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.src.original}
                key={index}
                alt={image.alt}
                className="image-fluid"
              />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
