import "./AddEntries.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEntries() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState([]);

  useEffect(() => {
    console.log(quotes);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  }, [quotes]);

  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/quotes`
      );
      setQuotes(response.data);
    };
    getQuotes();
  }, []);

  function handleSubmitButton(event) {
    console.log("submitted", event.target);
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
    navigate("/submitted");
  }

  return (
    <div className="book">
      <div className="book__page">
        <div className="book__heading">Welcome!</div>
        <div className="book__cover">
          <div className="book__paper">
            <div className="book__leftright">
              <div className="book__left">
                <div className="bookleft__quotes">"{selectedQuote?.body}"</div>
                <div className="bookleft__name">-{selectedQuote?.author}-</div>
                <div className="bookleft__musicPlayer">
                  <iframe
                    className="bookleft__iframe"
                    width="100%"
                    height="166"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569838168&color=%23ffc6ac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                </div>
              </div>

              <form
                className="book__form"
                onSubmit={(event) => {
                  handleSubmitButton(event);
                }}
              >
                <div className="book__right">
                  <div className="bookright__date">
                    {dayjs().format("MM-DD-YYYY")}
                  </div>
                  <div className="bookright__question">
                    I am greatful for ...
                  </div>
                  <div className="bookright__inputnumber">
                    1.{" "}
                    <input className="bookright__input" name="input1"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    2.{" "}
                    <input className="bookright__input" name="input2"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    3.{" "}
                    <input className="bookright__input" name="input3"></input>
                  </div>

                  <div className="bookright__question">
                    My goal for today is ...
                  </div>
                  <div className="bookright__inputnumber">
                    1.{" "}
                    <input className="bookright__input" name="input4"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    2.{" "}
                    <input className="bookright__input" name="input5"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    3.{" "}
                    <input className="bookright__input" name="input6"></input>
                  </div>

                  <div className="bookright__question">Meditation Record</div>
                  <div className="bookright__dropdown">
                    <select
                      name="meditationTime"
                      id="meditationTime"
                      className="bookright__select"
                    >
                      <option
                        className="bookright__dropdownOptions"
                        value="5min"
                      >
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
                      <option
                        className="bookright__dropdownOptions"
                        value="none"
                      >
                        no meditation today
                      </option>
                    </select>
                  </div>
                  {/* <NavLink to="/submitted" className="bookright__btnHyperlink"> */}
                  <button className="bookright__submitButton">Submit</button>
                  {/* </NavLink> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEntries;
