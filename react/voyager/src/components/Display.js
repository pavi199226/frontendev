import React from "react";

import { Container, Row, Col } from "react-bootstrap";
function Display() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} md={4}>
            <select></select>
          </Col>
          <Col xs={4} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={4} md={4}>
            xs=6 md=4
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Display;
