import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../netflix.css";
import "../App.css";
import Stars from "react-star-ratings";
import StarRatings from "react-star-ratings";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import "../App.css";
//const SomeStars = (vote) => (
//  <Stars
//    stars={Math.round(vote) - 5}
//    outOf={5}
//    full={"#056"}
//    empty={"#E1F1FF"}
//    stroke={"#000"}
//  />
//);
const a = (data) => {
  return "http" + data[0].slice(14, 67);
};

const loc = <FontAwesomeIcon icon={faCompass} />;
const maps = <FontAwesomeIcon icon={faMapMarker} />;
function Cards({ address, name }) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE&q=${address}`;
  const photoUrl = ``;
  return (
    <div>
      <Container fluid="xs">
        <Row>
          <Col xs={3}>
            <div
              style={{ width: "100%", height: "auto" }}
              className="col-md-3 box"
            >
              <h1>Category</h1>
              <Iframe
                url="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE&q=Space+Needle,Seattle+WA"
                width="250px"
                height="450px"
                display="initial"
                position="absolute"
                src={mapUrl}
              />
            </div>
          </Col>
          <Col xs={9}>
            <div style={{ width: "18rem" }} className="col-md-3 box">
              {name.map((place, index) => {
                const uri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&sensor=false&key=AIzaSyDPUOSET_JlnAy_G8T1AFnMkExbJrz4UmE`;
                return (
                  <Card
                    className="card "
                    style={{ width: "15vw", height: "auto", opacity: 0.8 }}
                  >
                    <Card.Body>
                      <Card.Text onClick="alert('hey);">
                        {
                          <img
                            src={uri}
                          /> /*<Photos reference={place.photos[0].photo_reference} />*/
                        }
                        <a href="#">
                          <strong>{place.name}</strong>
                        </a>
                        <br />
                        <hr />
                        <strong>Operating hours:</strong>
                        {place.business_status}
                        <br />
                        <hr />
                        <a>{loc}</a>
                        <a href="{place.formatted_address}">
                          {place.formatted_address}
                        </a>
                        <br />
                        <hr />
                        <strong>Rating:</strong>
                        <h4>
                          {place.rating}

                          <StarRatings
                            rating={place.rating}
                            starDimension="13px"
                            starSpacing="5px"
                            starRatedColor="blue"
                          />
                        </h4>
                        {/*  <br />
                      <hr />
                      <strong>User votes:</strong>
                      <h4>{place.user_ratings_total}</h4>
                      <br />*/}

                        {/*<a target="_blank" href={a(place.photos[0].html_attributions)}>
                {maps}
              </a>
      
                      <hr />*/}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
