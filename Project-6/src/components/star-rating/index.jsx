import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    // console.log(currentIndex);
    setRating(currentIndex);
  }
  function handleMouseEnter(currentIndex) {
    // console.log(currentIndex);
    setHover(currentIndex);
  }
  function handleMouseLeave(currentIndex) {
    // console.log(currentIndex);
    setHover(rating);
  }

  return (
    <div className="flex">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
