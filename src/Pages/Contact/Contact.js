import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container id="contact">
      <Row className="rules">
        <h2>Pay Heed Those Who Enter Here!</h2>
        <p>
          I am not a very fast learner when it comes to a fluid plan. I work far
          better with a structure and a plan of action. Thinking on my feet is
          not something that I excel at. There are also going to be moments
          where I will not understand what the purpose of a situation is, and I
          assure you it is not due to me not trying to understand, this is an
          aspect of my aspergers. I beg you, be patient and understand that I am
          willing to give everything and open up to those who prove they are not
          out for my head, life has taught me to close myself off, do not take
          it as me not wishing to speak, just that I do not know what to say.
        </p>
      </Row>
      <Row className="contacts">
        <Col xs="4" className="links">
          <h3>Links!</h3>
          <ul>
            <li>
              <a href="https://github.com/Z1springer">My GitHub Account</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/zach-springer-77b434200/">
                My LinkedIn Account
              </a>
            </li>
            <li>No Social Media Links worth Mentioning</li>
          </ul>
        </Col>
        <Col xs="4" className="emailnphone">
          <h3>My Info</h3>
          <p>Email: zdspringer99@gmail.com</p>
          <p>Phone Number: 253-592-9629</p>
        </Col>
        <Col xs="4" className="resume">
          <h3>My Resume</h3>
          <p>!!A link and image of a resume will go here!!</p>
        </Col>
      </Row>
      <Row xs="8" className="aword">
        <h2>One Last Thing...</h2>
        <p>
          I am not a fan of speaking with automated systems, nor am I very good
          at being spoken to through a script, as such; I will hang up any call
          that I believe to be in any way automated.
          <br />
          <br />
          Furthermore, I will delete any emails that reacure over and over, I
          have enough filling my inbox
        </p>
      </Row>
    </Container>
  );
};

export default Contact;
