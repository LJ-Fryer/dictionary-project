import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.keyword);
  return (
    <div className="Images d-flex mt-5 me-2 ms-2 justify-content-between">
      <img
        src="https://media.istockphoto.com/id/91517528/photo/abstract-graffiti-gibberish-on-texture.jpg?b=1&s=612x612&w=0&k=20&c=OvisUdDfuwJbYOe-U15qsdRK8Mt5Huhwd0E6TWdUrpc="
        alt="gibberish"
      />
      <img
        src="https://media.istockphoto.com/id/91517528/photo/abstract-graffiti-gibberish-on-texture.jpg?b=1&s=612x612&w=0&k=20&c=OvisUdDfuwJbYOe-U15qsdRK8Mt5Huhwd0E6TWdUrpc="
        alt="gibberish"
      />
      <img
        src="https://media.istockphoto.com/id/91517528/photo/abstract-graffiti-gibberish-on-texture.jpg?b=1&s=612x612&w=0&k=20&c=OvisUdDfuwJbYOe-U15qsdRK8Mt5Huhwd0E6TWdUrpc="
        alt="gibberish"
      />
    </div>
  );
}
