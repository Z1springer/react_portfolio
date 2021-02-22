import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container id="contact">
      <Row className="rules">
        <p id="rules">
          rules and conduct to follow should someone find the need to contact
          me, along with what they might expect depending on the time of day
          they reach out
        </p>
      </Row>
      <Row className="contacts">
        <Col xs="4" className="links">
          <h4>Links!</h4>
          <ul>
            <li>Github:</li>
            <li>LinkedIn:</li>
            <li>No Social Media Links worth Mentioning</li>
          </ul>
        </Col>
        <Col xs="4" className="emailnphone">
          <p>my email and phone number will go here</p>
        </Col>
        <Col xs="4" className="resume">
          <p>A link and image of a resume will go here</p>
        </Col>
      </Row>
      <Row xs="8" className="aword">
        <p>
          a short warning for those who wish to shirk the rules of conduct when
          in these parts and just what my imediate reaction shall be
        </p>
      </Row>
    </Container>
  );
};

export default Contact;
