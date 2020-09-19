import React from "react";
import { useState } from "react";
import Axios from "axios";
import { Button, Card, CardDeck } from "react-bootstrap";
import GirlImg from "../girl.png";
import emailjs from "emailjs-com";
function Girl() {
  var girlcount = "";
  const [state, setState] = useState({
    gender: "Girl",
    username: "",
  });
  const handleinput = (e) => {
    if (e.target.value == "") {
      alert("enter valid input");
    } else {
      console.log(e.target.value);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    Axios.get("http://localhost:5000/girl/5f5b70c5955194835cfc61a3")
      .then((res) => {
        girlcount = Number(res.data.girlcount);
        const value = {
          girlcount: girlcount + 1,
        };
        console.log(girlcount);

        Axios.post(
          "http://localhost:5000/girl/update/5f5b70c5955194835cfc61a3",
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
              <input
                type="text"
                className="inputText"
                name="user_name"
                required
              />
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
