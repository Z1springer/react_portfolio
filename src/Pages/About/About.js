import React from "react";
import Me from "../About/general_profile_pic.jpg";
import Code from "../About/code.jpg";
import Future from "../About/future.jpg";
import "./About.css";

function About() {
  return (
    <div id="aboutPage">
      <div className="row">
        <a className="col-3">
          <img src={Me} id="me"></img>
        </a>
        <p className="col-9" id="past">
          I will obey your orders. I will serve this ship as First Officer. And
          in an attack against the Enterprise, I will die with this crew. But I
          will not break my oath of loyalty to Starfleet. Did you come here for
          something in particular or just general Riker-bashing? Smooth as an
          android's bottom, eh, Data? Commander William Riker of the Starship
          Enterprise. Captain, why are we out here chasing comets? I'll be sure
          to note that in my log. Fate protects fools, little children and ships
          named Enterprise.
        </p>
      </div>
      <br />
      <div className="row">
        <p className="col-9" id="present">
          I will obey your orders. I will serve this ship as First Officer. And
          in an attack against the Enterprise, I will die with this crew. But I
          will not break my oath of loyalty to Starfleet. Did you come here for
          something in particular or just general Riker-bashing? Smooth as an
          android's bottom, eh, Data? Commander William Riker of the Starship
          Enterprise. Captain, why are we out here chasing comets? I'll be sure
          to note that in my log. Fate protects fools, little children and ships
          named Enterprise.
        </p>
        <a className="col-3">
          <img src={Code} id="code"></img>
        </a>
      </div>
      <br />
      <div className="row">
        <a className="col-3">
          <img src={Future} id="future"></img>
        </a>
        <p className="col-9" id="future">
          I will obey your orders. I will serve this ship as First Officer. And
          in an attack against the Enterprise, I will die with this crew. But I
          will not break my oath of loyalty to Starfleet. Did you come here for
          something in particular or just general Riker-bashing? Smooth as an
          android's bottom, eh, Data? Commander William Riker of the Starship
          Enterprise. Captain, why are we out here chasing comets? I'll be sure
          to note that in my log. Fate protects fools, little children and ships
          named Enterprise.
        </p>
      </div>
    </div>
  );
}

export default About;
