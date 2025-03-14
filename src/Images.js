import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images d-flex mt-5 me-2 ms-2 justify-content-between">
        {props.images.slice(0, 3).map((image, index) => {
          return (
            <a
              href={image.src.original}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img
                src={image.src.original}
                alt={image.alt}
                className="image-fluid mb-2"
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
