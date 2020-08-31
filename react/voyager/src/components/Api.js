import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../vlogo.svg";
import Cards from "./Cards";
import Fetch from "../Fetch";

import {
  Button,
  Jumbotron,
  FormControl,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
const apiurl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
function Api() {
  const [state, setState] = useState({
    address: "",
    name: [],
    rating: [],
    results: [],
    user_ratings_total: [],
    place_id: [],
    address: [],
    photos: [],
    business_status: [],
  });
  const handleChange = (event) => {
    let address = event.target.value;

    console.log(address);
    setState((prevState) => {
      return { ...prevState, address: address };
    });
  };

  const handleSubmit = (event) => {
    //maps.googleapis.com/maps/api/place/textsearch/json?query=new+york+city+point+of+interest&language=en&key=API_KEY
    let address = event.target.value;

    console.log(address);

    console.log(state.address);
    const temp = {};
    const url =
      apiurl +
      state.address +
      "+point+of+interest&language=en&key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE";
    console.log(url);
    axios
      .get(url)
      .then((response) => response)
      .then((data) => {
        let places = data.data.results;
        console.log(places);
        setState((prevState) => {
          return {
            ...prevState,
            //name: places.name,
            //place_id: places.place_id,
            //rating: places.rating,
            //user_ratings_total: places.user_ratings_total,
            results: places,
            //address: places.formatted_address,
            //business_status: places.business_status,
          };
        });
      })
      .catch((error) => {
        alert("Please enter a valid city");
      });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <img src={logo} className="Bimg" />

        <Navbar.Brand href="#home" className="title">
          Voyager
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="#home">Plan a trip</Nav.Link>
          <Nav.Link href="#features">Check Flights</Nav.Link>
        </Nav>
      </Navbar>
      <Form inline>
        <Fetch address={state.inputvalue} />

        <Button onClick={handleSubmit} variant="outline-light">
          Search
        </Button>
      </Form>

      {state.results.length === 0 ? <Fetch /> : <Cards name={state.results} />}
    </div>
  );
}

export default Api;
