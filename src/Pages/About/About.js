import React from "react";
import Me from "../About/general_profile_pic.jpg";
import Code from "../About/code.jpg";
import Future from "../About/future.jpg";
import "./About.css";
import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <div id="aboutPage">
      <Row>
        <a className="col-3">
          <img src={Me} id="me"></img>
        </a>
        <Col id="past">
          In the past I always would seek out the grunt work, look for a job
          that would get me into next week then the week after that. Primarily
          dish-washing and order picking, eventually my mood and self-esteem
          plumetted and I was at an all-time low. When I quit my last job I had
          no idea what I was going to do, so I did what any sensible person is
          supposed to do... I spoke with my mother. She figured that we would
          try something that a friend of ours had, so I went to go and get
          tested by a Neuro Psychologist. After I recieved my results from the
          doctor, she sat me down and we spoke on what someone with ADHD and
          Aspergers can achieve if that person were to find the right
          environment. She recommended that a person with my mind-set and
          interests would thrive in a programming environment, thus began my
          search for an Occupational Therapist who could help me find the
          bootcamp that would fit my criteria.
        </Col>
      </Row>
      <br />
      <Row>
        <Col id="present">
          I was directed towards the UW Coding Bootcamp, where I found not only
          multiple people who proved pivotal to my success but also a kind of
          work that I can really feel passionate about. At the beginning I had
          no idea where I would take anything that I was being taught. Thinking
          multiple times that I would not be able to amount to anything and
          barely giving myself credit for any of my successes. But after enough
          time and as I was shown deeper and deeper levels of the industry. I
          found that website design is a part of this industry that I can really
          sink my teeth into, and the future of this portfolio will be testement
          to that. My immediate plans are to apply to work for the very program
          that helped to get me where I am.
        </Col>
        <a className="col-3">
          <img src={Code} id="code"></img>
        </a>
      </Row>
      <br />
      <Row>
        <a className="col-3">
          <img src={Future} id="booth"></img>
        </a>
        <Col id="future">
          But as this industry is an every flowing river of inovation and
          change, so to are the possibilities that lay before me. The
          intricacies of website design fascinate me with its limitlessness, and
          I would like to learn and apply as much as I can. In a dream world I
          would be able to pursue a career in voice-acting, and maybe someday it
          will be something I go after, but for now I must let practicality have
          the loudest voice.
        </Col>
      </Row>
    </div>
  );
}

export default About;
