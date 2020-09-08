import React, { Component } from "react";
import { state, useState } from "react";
import { Button, Card } from "react-bootstrap";
import BoyImg from "../boy.png";
import emailjs from "emailjs-com";

export class Boygen extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: "it is a boy", user: "" };
  }
  handleSubmit = (e) => {
    let val = prompt("enter your name");
    this.setState({ user: val });
    emailjs
      .sendForm(
        "service_1ea2zf6",
        "template_72xwwry",
        e.target,
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
  render() {
    return (
      <div>
        <Card style={{ width: "20vw", height: "50vh", opacity: 0.8 }}>
          <Card.Img
            variant="top"
            src={BoyImg}
            style={{ marginTop: "30px", width: "160px" }}
          />
          <Card.Body>
            <Button
              name="message"
              onClick={this.handleSubmit.bind(this)}
              variant="primary"
            >
              Vote
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Boygen;
