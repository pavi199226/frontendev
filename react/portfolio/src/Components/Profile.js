import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import sixsigma from "../sixsigma.png";
import mta from "../mta.png";
import css3 from "../css3.svg";
import html from "../html.svg";
import bootstrap from "../bootstrap.svg";
import react from "../react.svg";
import nodejs from "../nodejs.svg";
import javascript from "../js.svg";
import mongodb from "../mongodb.svg";
import file from "../Pavithra_Govindan_CV.pdf";
import photo1 from "../photo1.png";

function Profile() {
  return (
    <div>
      <div className="profile">
        <Container className="container" fluid="md">
          <Row>
            <Col xs={8}>
              <img
                src={photo1}
                style={{
                  width: "150px",
                  height: "auto",
                  borderRadius: "15px",
                }}
              />
              <h1 className="homeText mt-0">Pavithra here,</h1>
              <h4 style={{ textAlign: "justify" }}>
                I'm a Frontend developer, living in Belgium.
              </h4>
              <br />
              <a href={file} download="Pavithra_Govindan_CV.pdf">
                <Button
                  variant="primary"
                  style={{ width: "150px", marginTop: "10px" }}
                >
                  CV download
                </Button>
              </a>
            </Col>
            <Col xs={4}>
              <img src={sixsigma} style={{ width: "100px" }} />
              <img src={mta} style={{ width: "70px" }} />
            </Col>
          </Row>
          <div className="items" style={{ marginRight: "5px" }}>
            <img src={html} style={{ width: "50px" }} />
            <img src={css3} style={{ width: "50px" }} />
            <img src={bootstrap} style={{ width: "50px" }} />
            <img src={javascript} style={{ width: "50px" }} />
            <img src={nodejs} style={{ width: "50px" }} />
            <img src={react} style={{ width: "50px" }} />
            <img src={mongodb} style={{ width: "50px" }} />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Profile;
