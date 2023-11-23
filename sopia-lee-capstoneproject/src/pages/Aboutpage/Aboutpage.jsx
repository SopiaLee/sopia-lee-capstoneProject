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
      {/* <div className="book__page">
        <div className="book__heading">About</div>
        <div className="book__cover">
          <div className="book__paper">
            <div className="book__leftright">
              <div className="book__left2"></div>
              <div className="book__right2"></div>
            </div>
          </div>
        </div>
      </div> */}
      {/* //////// */}
      <div
        className={isTurned ? "books books--active" : "books"}
        onClick={handleOpenClick}
      >
        <div className="covers"></div>
        <div className="pages"></div>
        <div className="pages"></div>
        <div className="pages"></div>
        <div className="pages"></div>
        <div className="pages"></div>
        <div className="last-pages">
          <img src={logo} className="examplelogo"></img>
        </div>
        <div className="back-covers"></div>
      </div>
    </>
  );
}
export default Aboutpage;
