import React from "react";
import BMManager from "./assets/Capture.PNG";
import PWGenerator from "./assets/immlink1.png";
import DailyScheduler from "./assets/immlink3.png";
import WhatToDo from "./assets/immlink2.png";
import Budget from "./assets/budget_ting.png";
import Employee_Sorter from "./assets/employee_sorter.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div id="imgHome">
      <h1>Examples of My Work! Click for GitHub Links!</h1>
      <div className="row">
        <div className="col-md-6" className="img">
          <a href="https://github.com/Z1springer/password_creation">
            <img
              src={PWGenerator}
              className="img-fluid"
              alt="One of my better assignments"
            />
          </a>
        </div>
        <div className="col-md-6" className="img">
          <a href="https://github.com/Z1springer/what_to_do">
            <img
              src={WhatToDo}
              className="img-fluid"
              alt="My First Project at BC"
            />
          </a>
        </div>
        <div className="row">
          <div className="col-md-6" className="img">
            <a href="https://github.com/Z1springer/daily_scheduler">
              <img
                src={DailyScheduler}
                className="img-fluid"
                alt="One I put a lot of work in to"
              />
            </a>
          </div>
          <div className="col-md-6" className="img">
            <a href="https://github.com/Kray93/Bookmark-Manager">
              <img
                src={BMManager}
                className="img-fluid"
                alt="My Second Project at BC"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6" className="img">
            <a href="https://github.com/Z1springer/sorter-of-employees">
              <img
                src={Employee_Sorter}
                className="img-fluid"
                alt="One that I was able to do without pair-coding"
              />
            </a>
          </div>
          <div className="col-md-6" className="img">
            <a href="https://github.com/Z1springer/budget-cuts">
              <img
                src={Budget}
                className="img-fluid"
                alt="One of my better assignments"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
