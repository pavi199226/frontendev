import React from "react";
import logo from "./logo.svg";
import Boy from "./Components/Boy";
import Girl from "./Components/Girl";
import "./App.css";
import Anime from "./anime.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row, Col } from "react-bootstrap";
import md from "./md.png";
function App() {
  const date = new Date();
  const findate = new Date("1/22/2021");
  const diffTime = Math.abs(findate - date);
  const diffDays = [Math.ceil(diffTime / (1000 * 60 * 60 * 24))];
  var displayDays = new Set(diffDays.toString());
  var showDay = [...displayDays];

  return (
    <div className="App ">
      <div className="App-header">
        <Jumbotron>
          <Container>
            <h1 style={{ fontStyle: "cursive", fontFamily: "cursive" }}>
              Guess the gender!
            </h1>
          </Container>
        </Jumbotron>
      </div>
      <Container fluid="md">
        <Row>
          <Col md={1}>
            {" "}
            <img
              className="App-logo"
              src={Anime}
              style={{ width: "100px", height: "auto" }}
            />
          </Col>
          <Col md={4}>
            <Boy />
          </Col>

          <Col md={4}>
            <Girl />
          </Col>
          <Col md={3}>
            {" "}
            <img
              src={md}
              style={{
                width: "150px",
                height: "auto",
                borderRadius: "85px",
                margin: "0px",
              }}
            />
            <p className="baby">
              Dear Mum and Dad,
              <br /> I love you loads but do remember I'm going to be the boss
              of you both.And Dad, I can't stand stinky diapers, so you better
              be in charge of diaper duty.And Mum,did you buy my baby bag?Cheers
              to sleepless nights :){" "}
              <div>
                {" "}
                <strong>
                  {" "}
                  Arriving in{" "}
                  {showDay.map((day) => {
                    return <button className="btn">{day}</button>;
                  })}{" "}
                  days{" "}
                </strong>
              </div>
            </p>{" "}
          </Col>
        </Row>
        <Row></Row>
      </Container>
      {/*<div className="row">
        <div className="col-xl-2">
          <img
            className="App-logo"
            src={Anime}
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="col-xl-4">
          <Boy />
        </div>
        <div className="col-xl-5">
          <Girl />
        </div>
        <div className="col-xl-1">
          <img
            src={md}
            style={{
              width: "150px",
              height: "auto",
              marginTop: "-200px",
              marginLeft: "330px",
              position: "absolute",
              borderRadius: "75px",
            }}
          />
          <p className="baby">
            Dear mum and dad,
            <br /> I love you loads but do remember I'm going to be the boss of
            you both.And dad, I can't stand stinky diapers, so you better be in
            charge of diaper duty.And mom,did you buy my baby bag?Cheers to
            sleepless nights :){" "}
            <div>
              {" "}
              <strong>
                {" "}
                arriving in{" "}
                {showDay.map((day) => {
                  return <button className="btn">{day}</button>;
                })}{" "}
                days{" "}
              </strong>
            </div>
          </p>
        </div>
              </div>*/}
    </div>
  );
}

export default App;
