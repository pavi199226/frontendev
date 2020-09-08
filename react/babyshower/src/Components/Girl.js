import React from "react";
import { useState } from "react";

import { Button, Card, CardDeck } from "react-bootstrap";
import GirlImg from "../girl.png";
import emailjs from "emailjs-com";
function Girl() {
  const [state, setState] = useState({
    gender: "It's a girl",
    username: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

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
            style={{
              width: "30vw",
              height: "50vh",
              opacity: 0.7,
              margin: "auto",
            }}
          >
            <Card.Img
              variant="top"
              className="imgClas"
              src={GirlImg}
              style={{ marginTop: "0px", width: "160px" }}
            />
            <Card.Body>
              <label style={{ textAlign: "left" }}>Enter your Name</label>
              <input type="text" className="inputText" name="user_name" />
              <input
                type="submit"
                value="Vote"
                className="btn-pink btn--submit"
              />
            </Card.Body>
          </Card>
        </CardDeck>
        <textarea name="message" value={state.gender} />
      </form>
    </div>
  );
}

export default Girl;
