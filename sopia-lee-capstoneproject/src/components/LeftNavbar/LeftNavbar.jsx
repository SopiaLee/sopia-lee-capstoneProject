import { NavLink, Link } from "react-router-dom";
import "./LeftNavbar.scss";
import logo from "../../assets/logo/BlissfulNote-logo.svg";

function LeftNavbar() {
  const checkActive = () => {
    let removeClass = document.querySelector("active");
    if (removeClass) {
      document.classList.remove("active");
    }
  };

  return (
    <div className="leftNavbar" onClick={checkActive}>
      <NavLink to="/" className="leftNavbar__logobackground">
        <img className="leftNavbar__logo" src={logo} alt="logo"></img>
      </NavLink>
      <NavLink
        to="/"
        className="leftNavbar__option"
        // onClick={(event) => handleLinkClick(event)}
      >
        <div className="leftNavbar__option">Add Entries</div>
      </NavLink>
      <NavLink
        to="/viewentries"
        className="leftNavbar__option"
        // onClick={(event) => handleLinkClick(event)}
      >
        <div className="leftNavbar__option">View Entries</div>
      </NavLink>
      <NavLink
        to="/about"
        className="leftNavbar__option"
        // onClick={(event) => handleLinkClick(event)}
      >
        <div className="leftNavbar__option">About</div>
      </NavLink>
    </div>
  );
}

export default LeftNavbar;
