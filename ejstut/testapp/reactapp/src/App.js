import React from "react";
import axios from "axios";
import "./App.css";
import Boy from "./Component/Boy";
import Girl from "./Component/Girl";
import { useState } from "react";
import Anime from "./anime.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function App() {
  const date = new Date();
  const findate = new Date("1/22/2021");
  const diffTime = Math.abs(findate - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const [state, setState] = useState({
    message: "hello",
  });
  const handleSubmit = () => {
    axios
      .get("http://localhost:5000/express_backend")
      .then((res) => {
        setState(() => {
          return { message: res.data.express };
        });
        console.log(res.data.express);
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      <div className="App-header">
        <Jumbotron fluid>
          <Container>
            <h1>Guess my gender!!</h1>
          </Container>
        </Jumbotron>
        <div className="show">{diffDays} days more </div>
      </div>
      <div className="row">
        <div className="col-xl-3">
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
      </div>
      <section>
        <button onClick={handleSubmit}>Submit</button>
      </section>
    </div>
  );
}

export default App;
