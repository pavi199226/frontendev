import React from "react";
import { useState } from "react";

import { Button, Card } from "react-bootstrap";
import GirlImg from "../girl.png";
function Girl() {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    prompt("Enter your name");
  };
  return (
    <div>
      <Card style={{ width: "20vw", height: "50vh", opacity: 0.8 }}>
        <Card.Img variant="top" src={GirlImg} style={{ width: "160px" }} />
        <Card.Body>
          <Button onClick={handleChange} variant="Dark">
            Vote
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Girl;
