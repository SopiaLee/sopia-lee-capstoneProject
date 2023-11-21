import "./AddEntries.scss";
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEntries() {
  const navigate = useNavigate();

  function handleSubmitButton(event) {
    console.log("submitted");
    event.preventDefault();

    const response = axios.post(`${process.env.REACT_APP_API_URL}/forms`, {
      input1: event.target.input1.value,
      input2: event.target.input2.value,
      input3: event.target.input3.value,
      input4: event.target.input4.value,
      input5: event.target.input5.value,
      input6: event.target.input6.value,
      meditationTime: event.target.meditationTime.value,
    });
    console.log(response);
    navigate("/");
  }

  return (
    <div className="book__page">
      <div className="book__heading">Good morning, Amanda!</div>
      <div className="book__cover">
        <div className="book__paper">
          <div className="book__leftright">
            <div className="book__left">
              <div className="bookleft__quotes">"QUOTES FOR TODAY"</div>
              <div className="bookleft__name">-Name-</div>
              <div className="bookleft__musicPlayer">Music Player</div>
            </div>

            <form
              className="book__form"
              onSubmit={(event) => {
                handleSubmitButton(event);
              }}
            >
              <div className="book__right">
                <div className="bookright__date">
                  {dayjs().format("MM/DD/YYYY")}
                </div>
                <div className="bookright__question">I am greatful for ...</div>
                <div className="bookright__inputnumber">
                  1. <input className="bookright__input" name="input1"></input>
                </div>
                <div className="bookright__inputnumber">
                  2. <input className="bookright__input" name="input2"></input>
                </div>
                <div className="bookright__inputnumber">
                  3. <input className="bookright__input" name="input3"></input>
                </div>

                <div className="bookright__question">
                  My goal for today is ...
                </div>
                <div className="bookright__inputnumber">
                  1. <input className="bookright__input" name="input4"></input>
                </div>
                <div className="bookright__inputnumber">
                  2. <input className="bookright__input" name="input5"></input>
                </div>
                <div className="bookright__inputnumber">
                  3. <input className="bookright__input" name="input6"></input>
                </div>

                <div className="bookright__question">Meditation Record</div>
                <div className="bookright__dropdown">
                  <select name="meditationTime" id="meditationTime">
                    <option className="bookright__dropdownOptions" value="5min">
                      5 minutes
                    </option>
                    <option
                      className="bookright__dropdownOptions"
                      value="10-15mins"
                    >
                      10-15 minutes
                    </option>
                    <option
                      className="bookright__dropdownOptions"
                      value="15-30mins"
                    >
                      15-30 minutes
                    </option>
                    <option
                      className="bookright__dropdownOptions"
                      value="30-45mins"
                    >
                      30-45 minutes
                    </option>
                    <option
                      className="bookright__dropdownOptions"
                      value="45-60mins"
                    >
                      45-60 minutes
                    </option>
                    <option
                      className="bookright__dropdownOptions"
                      value="over-60mins"
                    >
                      over 60 minutes
                    </option>
                    <option className="bookright__dropdownOptions" value="none">
                      no meditation today
                    </option>
                  </select>
                </div>
                <button className="bookright__submitButton">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEntries;
