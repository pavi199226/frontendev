import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import zakynthos from "../zakynthos.JPG";
import ny from "../ny.jpg";
import brussels from "../brussels.jpg";
function DispCarousel() {
  return (
    <Carousel>
      <div>
        <img src={brussels} />
      </div>
      <div>
        <img src={zakynthos} />
      </div>
      <div>
        <img src={ny} />
      </div>
    </Carousel>
  );
}

export default DispCarousel;
