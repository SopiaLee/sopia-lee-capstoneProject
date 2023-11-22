import "./ViewEntries.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

function ViewEntries() {
  const [forms, setForms] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [selectedForm, setSelectedForm] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState([]);

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
    let formDate = dayjs(startDate).format("MM-DD-YYYY");
    const getSelectedForm = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/forms/${formDate}`
        );
        setSelectedForm(response.data);
        console.log("selected form", response.data);
      } catch (err) {
        console.log(err);
        alert("ALERT: No entries on this date. Choose another date.");
        // navigate("/notfound");
      }
    };
    getSelectedForm();
  }, [startDate]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedQuote(quotes[randomIndex]);
  }, [quotes]);

  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/quotes`,
        {
          params: {
            date: dayjs(startDate).format("MM-DD-YYYY"),
          },
        }
      );
      setQuotes(response.data);
    };
    getQuotes();
  }, [startDate]);

  return (
    <>
      <div className="book__page">
        <DatePicker
          className="book__datepicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
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

              <form className="book__form">
                <div className="book__right">
                  {selectedForm.id && (
                    <>
                      <div className="bookright__date">
                        {selectedForm.timestamp}
                      </div>
                      <div className="bookright__questionview">
                        I am greatful for ...
                      </div>

                      <div className="bookright__inputview">
                        1. {selectedForm.input1}
                      </div>

                      <div className="bookright__inputview">
                        2. {selectedForm.input2}
                      </div>

                      <div className="bookright__inputview">
                        3. {selectedForm.input3}
                      </div>

                      <div className="bookright__questionview">
                        My goal for today is ...
                      </div>
                      <div className="bookright__inputview">
                        1. {selectedForm.input4}
                      </div>

                      <div className="bookright__inputview">
                        2. {selectedForm.input5}
                      </div>

                      <div className="bookright__inputview">
                        3. {selectedForm.input6}
                      </div>

                      <div className="bookright__dropdownTitle">
                        Meditation Time
                        <div className="bookright__dropdownResult">
                          {selectedForm.meditationTime}
                        </div>
                      </div>
                    </>
                  )}
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
