import React from "react";
import emailjs from "emailjs-com";

import { Container, Row, Col, Button } from "react-bootstrap";
function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ea2zf6",
        "template_dxtdegh",
        e.target,
        "user_h4YYanXIyFwlPzEONunj8"
      )
      .then(
        (result) => {
          alert("submitted");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h3>Leave your message...</h3>
      <Container fluid>
        <Row>
          <Col>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label>Name:</label>
              <br />
              <input type="text" name="user_name" />
              <br />
              <label>Email:</label>
              <br />
              <input type="email" name="user_email" />
              <br />
              <label>Message:</label>
              <br />
              <textarea rows="4" cols="23" name="message" />
              <br />
              <br />
              <Button type="submit" value="Submit" variant="primary">
                Submit
              </Button>
              <br />
            </form>
          </Col>
          <br />
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
