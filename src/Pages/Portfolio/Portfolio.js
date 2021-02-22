import React from "react";
import BMManager from "./assets/Capture.PNG";
import PWGenerator from "./assets/immlink1.png";
import DailyScheduler from "./assets/immlink3.png";
import WhatToDo from "./assets/immlink2.png";

function Portfolio() {
  return (
    <div className="row">
      <div className="col-md-6">
        <a href="https://github.com/Z1springer/password_creation">
          <img
            src={PWGenerator}
            className="img-fluid"
            alt="password_generator"
          />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://github.com/Z1springer/what_to_do">
          <img
            src={WhatToDo}
            className="img-fluid"
            alt="first_project_what_to_do"
          />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://github.com/Z1springer/daily_scheduler">
          <img
            src={DailyScheduler}
            className="img-fluid"
            alt="daily_scheduler"
          />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://github.com/Kray93/Bookmark-Manager">
          <img
            src={BMManager}
            className="img-fluid"
            alt="second_project_Bookmark-Manager"
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
