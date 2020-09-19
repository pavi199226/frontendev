import React from "react";
import { state, useState } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { Button } from "react-bootstrap";
import BoyImg from "../boy.png";
import emailjs from "emailjs-com";
import Axios from "axios";
function Boy() {
  var boycount = "";
  const [state, setState] = useState({
    gender: "Boy",
    username: "",
  });
  const handleChange = (event) => {
    var user = prompt("Enter your name");

    setState({ username: user });

    emailjs
      .send(
        "service_1ea2zf6",
        "template_72xwwry",
        { state, user },
        "user_h4YYanXIyFwlPzEONunj8"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const handleinput = (e) => {
    if (e.target.value == "") {
      alert("input invalid");
    } else {
      return e.target.value;
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:5000/boy/5f5b8ecf1e8f7290dc4c8ddc")
      .then((res) => {
        boycount = Number(res.data.boycount);
        const value = {
          boycount: boycount + 1,
        };
        console.log(boycount);

        Axios.post(
          "http://localhost:5000/boy/update/5f5b8ecf1e8f7290dc4c8ddc",
          value
        )
          .then((res) => console.log(res))
          .catch((err) => err);
        console.log(res);
      })
      .catch((err) => console.log(err));

    emailjs
      .sendForm(
        "service_7hyu5vc",
        "template_5xafldx",
        e.target,
        "user_Fxam2NEQEZGODJRwgWnYL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for voting");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <CardDeck>
          <Card
            className="card"
            style={{
              margin: "auto",
              width: "30vw",
              height: "50vh",
              opacity: 0.7,
            }}
          >
            <Card.Img
              variant="top"
              src={BoyImg}
              className="imgClas"
              style={{ marginTop: "35px", width: "160px" }}
            />
            <Card.Body>
              <label style={{ textAlign: "left" }}>Enter your Name</label>
              <input
                type="text"
                className="inputText"
                name="user_name"
                required
              />
              <input
                type="submit"
                value="Vote"
                className="btn-blue btn--submit"
              />
            </Card.Body>
          </Card>
        </CardDeck>
        <textarea name="message" value={state.gender} />
      </form>
    </div>
  );
}

export default Boy;
