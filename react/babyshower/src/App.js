import React from "react";
import logo from "./logo.svg";
import Boy from "./Components/Boy";
import Girl from "./Components/Girl";
import "./App.css";
import Anime from "./anime.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import md from "./md.png";
import bossbaby from "./bossbaby.png";
import Axios from "axios";

function App() {
  const date = new Date();
  const findate = new Date("1/22/2021");
  const diffTime = Math.abs(findate - date);
  const diffDays = [Math.ceil(diffTime / (1000 * 60 * 60 * 24))];
  var displayDays = new Set(diffDays.toString());
  var showDay = [...displayDays];
  var boycount = "";
  var girlcount = "";
  var totalcount = "";
  var girlp = "";
  var boyp = "";
  const handleload = () => {
    Axios.get("http://localhost:5000/girl/5f5b70c5955194835cfc61a3")
      .then((res) => {
        girlcount = res.data.girlcount;
      })
      .catch((err) => console.log(err));
    Axios.get("http://localhost:5000/boy/5f5b8ecf1e8f7290dc4c8ddc")
      .then((res) => {
        boycount = res.data.boycount;
      })
      .catch((err) => console.log(err));
    totalcount = Number(boycount + girlcount);
    console.log(Number(totalcount), Number(girlcount));
    var girlp = Math.floor((girlcount / totalcount) * 100);
    var boyp = Math.floor((boycount / totalcount) * 100);
    console.log(girlp, boyp);
  };
  console.log(girlp, boyp);
  return (
    <div className="App " onLoad={handleload}>
      <div className="App-header">
        <Jumbotron>
          <Container>
            <h1 style={{ fontStyle: "cursive", fontFamily: "cursive" }}>
              Guess the gender!
            </h1>
          </Container>
        </Jumbotron>
        <img src={bossbaby} style={{ width: "80px", height: "120px" }} />
      </div>

      <strong>
        <h5
          style={{
            color: "white",
            fontStyle: "cursive",
            fontFamily: "cursive",
            margin: "0px 5px 10px 5px",
          }}
        >
          Welcome to my gender reveal party. Hurry up, cast your votes!
        </h5>
      </strong>
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
          <Col className="parentbaby" md={3}>
            {
              <h5
                style={{
                  color: "white",
                  fontStyle: "cursive",
                  fontFamily: "cursive",
                }}
              >
                Note to my parents
              </h5>
            }
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
              be in charge of diaper duty.Mum,I have planned to start crying at
              3 AM mostly,just a heads-up.Cheers to sleepless nights you gaizz
              :){" "}
              <div>
                {" "}
                <strong>
                  {" "}
                  I'm arriving in{" "}
                  {showDay.map((day) => {
                    return <button className="btn">{day}</button>;
                  })}{" "}
                  days.{" "}
                </strong>
              </div>
            </p>{" "}
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}

export default App;
