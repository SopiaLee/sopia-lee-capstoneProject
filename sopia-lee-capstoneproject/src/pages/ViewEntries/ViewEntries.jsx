import "./ViewEntries.scss";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ViewEntries() {
  const [forms, setForms] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedForm, setSelectedForm] = useState({});

  const params = useParams();

  useEffect(() => {
    const getForms = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/forms`
      );
      setForms(response.data);
    };
    getForms();
  }, []);

  useEffect(() => {
    let formId = "1";
    if (params.id) {
      formId = params.id;
    }

    const getSelectedForm = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/forms/${formId}`
      );
      setSelectedForm(response.data);
    };
    getSelectedForm();
  }, [params.id]);

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
                  {forms
                    .filter((form) => form.timestamp !== selectedForm.timestamp)
                    .map((form) => {
                      return (
                        <>
                          {selectedForm.id && (
                            <>
                              <div className="bookright__date">
                                {selectedForm.timestamp}
                              </div>
                              <div className="bookright__question">
                                I am greatful for ...
                              </div>

                              <div className="bookright__input">
                                1. {selectedForm.input1}
                              </div>

                              <div className="bookright__input">
                                2. {selectedForm.input2}
                              </div>

                              <div className="bookright__input">
                                3. {selectedForm.input3}
                              </div>

                              <div className="bookright__question">
                                My goal for today is ...
                              </div>
                              <div className="bookright__input">
                                1. {selectedForm.input4}
                              </div>

                              <div className="bookright__input">
                                2. {selectedForm.input5}
                              </div>

                              <div className="bookright__input">
                                3. {selectedForm.input6}
                              </div>

                              <div className="bookright__dropdownTitle">
                                Meditation Time
                                <div className="bookright__dropdown">
                                  {selectedForm.meditationTime}
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
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
