import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../display.css";
import "../App.css";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";
import noimage from "../noimage.png";
const a = (data) => {
  return "http" + data[0].slice(14, 67);
};

const loc = <FontAwesomeIcon icon={faCompass} />;
function Cards({ address, name }) {
  const atmUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}
  &q=atm centers in ${address}`;
  const hotleUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}
  &q=hotels+atm in ${address}`;

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
                width="250px"
                height="450px"
                display="initial"
                position="absolute"
                src={hotleUrl}
              />
            </div>
          </Col>
          <Col xs={9}>
            <div style={{ width: "18rem" }} className="col-md-3 box">
              {name.map((place, key) => {
                let uri = noimage;
                if (place.photos) {
                  uri = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&sensor=false&key=${process.env.REACT_APP_API_KEY}`;
                }
                return (
                  <Card
                    className="card "
                    style={{ width: "15vw", height: "auto", opacity: 0.8 }}
                  >
                    <Card.Body>
                      <Card.Text>
                        {
                          <div>
                            <img src={uri} />
                          </div>

                          /*<Photos reference={place.photos[0].photo_reference} />*/
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
                        <br />
                        <hr />

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
