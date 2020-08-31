import React from "react";
import { Stars } from "react-star-ratings";
const SomeStars = (vote) => (
  <Stars
    stars={Math.round(vote) - 5}
    outOf={5}
    full={"#d00"}
    empty={"#E1F1FF"}
    stroke={"#369"}
    style={{ width: "1rem", opacity: 0.8 }}
  />
);
function StarsRating(rating) {
  return <div>{SomeStars(rating)}</div>;
}

export default StarsRating;
