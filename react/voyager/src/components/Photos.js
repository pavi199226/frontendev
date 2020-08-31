import React from "react";
import axios from "axios";
import { Image } from "react-bootstrap";
import { useState } from "react";
function Photos({ reference }) {
  const [state, setState] = useState({
    address: "",
  });
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${reference}&key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE`;
  axios
    .get(url)
    .then((response) => response)
    .then((data) => {
      setState((prevState) => {
        return { ...prevState, address: data };
      });
    });
  return <div>{state.address}</div>;
}

export default Photos;
