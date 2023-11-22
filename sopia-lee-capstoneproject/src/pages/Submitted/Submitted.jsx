import "./Submitted.scss";
import { useEffect, useState } from "react";
import submitImage from "../../assets/image/submitted stamp.png";

// import "react-datepicker/dist/react-datepicker.css";
// import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Submitted() {
  //   const navigate = useNavigate();
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

  return (
    <div className="book__page">
      <div className="book__heading">Submitted</div>
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
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/569838168&color=%23ffc6ac&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </div>
            </div>
            <div className="book__containerright">
              <div className="book__rightSubmit">
                <img
                  className="bookright__submittedimg"
                  src={submitImage}
                  alt="submitted img"
                ></img>
                <div className="bookright__message">
                  Your entries are submitted!
                </div>
                <NavLink to="/viewentries" className="bookright__btnHyperlink">
                  <button className="bookright__btn">
                    View Previous Entries
                  </button>
                </NavLink>
                <NavLink to="/" className="bookright__btnHyperlink">
                  <button className="bookright__btn">Add New Entries</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
