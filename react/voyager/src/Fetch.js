import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import axios from "axios";
import Cards from "./components/Cards";
import {
  Button,
  Jumbotron,
  FormControl,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
const apiurl =
  "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", results: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
    console.log(address);
  };
  handleSubmit = () => {
    const url =
      apiurl +
      this.state.address +
      "+point+of+interest&language=en&key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE";
    console.log(url);
    axios
      .get(url)
      .then((response) => response)
      .then((data) => {
        let places = data.data.results;
        console.log(places);
        this.setState((prevState) => {
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
  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              style={{ width: "300px" }}
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <Button
              className="bg-success ml-2"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </Button>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
              <hr />

              {this.state.results.length === 0 ? null : (
                <Cards name={this.state.results} />
              )}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default Fetch;
