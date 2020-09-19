import React from "react";
import { Card } from "react-bootstrap";
import iguards from "../iguardsapp.png";
import weather from "../weather.png";
import gender from "../gender.png";
import voyager from "../voyager.png";
function Portfolio() {
  return (
    <div className="portfolio">
      <a href="https://pavi199226.github.io/iGuards.io/">
        <Card
          style={{
            width: "20rem",
            border: "1px ",
            padding: "12px 12px 12px 12px",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <Card.Img variant="top" src={iguards} />
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://pavi199226.github.io/weather">
        <Card
          style={{
            width: "20rem",
            border: "1px ",
            padding: "12px 12px 12px 12px",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <Card.Img variant="top" src={weather} />
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      <a href="https://pavi199226.github.io/voyager">
        <Card
          style={{
            width: "20rem",
            border: "1px ",
            padding: "12px 12px 12px 12px",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <Card.Img variant="top" src={voyager} />
            </Card.Text>
          </Card.Body>
        </Card>
      </a>

      <a href="https://pavi199226.github.io/guessthegender">
        <Card
          style={{
            width: "20rem",
            border: "1px ",
            padding: "12px 12px 12px 12px",
            borderRadius: "15px",
          }}
        >
          <Card.Body>
            <Card.Text>
              <Card.Img variant="top" src={gender} />
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default Portfolio;
