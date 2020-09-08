import React from "react";
import { state, useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "reactstrap";
import BoyImg from "../boy.png";

function Boy() {
  const [state, setState] = useState({
    gender: "Its a boy",
    username: "",
  });
  const handleChange = (event) => {
    var user = prompt("Enter your name");

    setState({ username: user });
  };

  return (
    <div>
      <Card style={{ width: "20vw", height: "50vh", opacity: 0.8 }}>
        <Card.Img
          variant="top"
          src={BoyImg}
          style={{ marginTop: "30px", width: "160px" }}
        />
        <Card.Body>
          <input
            type="submit"
            value="Submit"
            className="btn btn--submit"
            onClick={handleChange}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Boy;
