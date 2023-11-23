import "./Aboutpage.scss";
import logo from "../../assets/logo/BlissfulNote-logo.svg";
import { useState } from "react";

function Aboutpage() {
  const [isTurned, setIsTurned] = useState(false);

  const handleOpenClick = () => {
    console.log("triggered");
    setIsTurned(!isTurned);
  };

  return (
    <>
      <div className="wrap">
        <div className="messagebox__content">
          Click on the notebook to open & close!
        </div>
        <div
          className={isTurned ? "books books--active" : "books"}
          onClick={handleOpenClick}
        >
          <div className="covers">
            <div className="covers__box"></div>
          </div>
          <div className="pages"></div>
          <div className="pages"></div>
          <div className="pages"></div>
          <div className="pages"></div>
          <div className="pages"></div>
          <div className="last-pages">
            <img src={logo} className="brandlogo"></img>
            <div className="brandDes">
              Introducing <span className="brandDes__bold">BlissfulNotes</span>,
              a transformative online platform designed to seamlessly integrate{" "}
              <span className="brandDes__bold">gratitude journaling</span>,{" "}
              <span className="brandDes__bold">daily goal settings</span>, and{" "}
              <span className="brandDes__bold">meditation</span> into your daily
              routine.
              <br />
              <br />
              Crafted with your busy lifestyle in mind, our user-friendly
              interface empowers you to complete these essential tasks in just
              10-15 minutes, making self-reflection and personal growth
              effortlessly achievable. Immerse yourself in a blissful experience
              that not only <span className="brandDes__bold">
                saves time
              </span>{" "}
              but also{" "}
              <span className="brandDes__bold">fosters consistency</span> in
              nurturing your well-being.
              <br />
              <br />
              Embrace the power of reflection and mindfulness with
              BlissfulNotes, your dedicated companion on the journey to a more
              balanced and intentional life.
            </div>
            <a
              href="https://sopias-portfolio.webflow.io/work/project-4"
              target="_blank"
              className="projectDetialsButton"
            >
              More about project details
            </a>
          </div>
          <div className="back-covers"></div>
        </div>
      </div>
    </>
  );
}
export default Aboutpage;
