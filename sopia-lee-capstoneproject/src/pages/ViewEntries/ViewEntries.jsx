import "./ViewEntries.scss";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ViewEntries() {
  const [forms, setForms] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  //   //   const [selectedForm, setSelectedForm] = useState({});

  //   //   const params = useParams();

  useEffect(() => {
    const getForms = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/forms`
      );
      setForms(response.data);
    };
    getForms();
  }, []);

  //   useEffect(() => {
  //     let formsDate = "";
  //     if (params.timestamp) {
  //       formsDate = params.timestamp;
  //     }

  //     const getSelectedForm = async () => {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/forms/${id}`
  //       );
  //       setSelectedForm(response.data);
  //     };
  //     getSelectedForm();
  //   }, [params.timestamp]);

  return (
    <>
      <div className="book__page">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <div className="book__cover">
          <div className="book__paper">
            <div className="book_leftright">
              <div className="book__left">
                <div className="bookleft__quotes">"QUOTES FOR TODAY"</div>
                <div className="bookleft__name">-Name-</div>
                <div className="bookleft__musicPlayer">Music Player</div>
              </div>

              <form className="book__form">
                <div className="book__right">
                  <div className="bookright__date">2023, Nov 14th</div>
                  <div className="bookright__question">
                    I am greatful for ...
                  </div>
                  <div className="bookright__inputnumber">
                    1. <div className="bookright__input"></div>
                  </div>
                  <div className="bookright__inputnumber">
                    2. <div className="bookright__input"></div>
                  </div>
                  <div className="bookright__inputnumber">
                    3. <div className="bookright__input"></div>
                  </div>

                  <div className="bookright__question">
                    My goal for today is ...
                  </div>
                  <div className="bookright__inputnumber">
                    1. <input className="bookright__input"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    2. <input className="bookright__input"></input>
                  </div>
                  <div className="bookright__inputnumber">
                    3. <input className="bookright__input"></input>
                  </div>

                  <div className="bookright__question">Meditation Record</div>
                  <div className="bookright__dropdown">
                    <label
                      for="meditationTime"
                      className="bookright__dropdownTitle"
                    >
                      Meditation Time{" "}
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewEntries;
