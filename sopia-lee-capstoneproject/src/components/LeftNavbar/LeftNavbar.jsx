import { NavLink, Link } from "react-router-dom";
import "./LeftNavbar.scss";

function LeftNavbar() {
  const checkActive = () => {
    let removeClass = document.querySelector("active");
    console.log(removeClass);
    if (removeClass) {
      document.classList.remove("active");
    }
  };

  const handleLinkClick = (event) => {
    console.log(event.target);
    event.target.classList.add("active");
    // event.addClass("active");
  };

  return (
    <div className="leftNavbar" onClick={checkActive}>
      <NavLink to="/">
        <img className="leftNavbar__logo" alt="logo"></img>
      </NavLink>
      <NavLink
        to="/"
        onClick={(event) => handleLinkClick(event)}
        // className="leftNavbar__option"
        // style={
        //   ({ isActive }) =>
        //     isActive
        //       ? {
        //           color: "#000000",
        //           background: "#FFF6DC",
        //           textDecoration: "none",
        //         }
        //       : {
        //           color: "#000000",
        //           background: "#FFC6AC",
        //           textDecoration: "none",
        //         }

        //   ({
        //     color: isActive ? "#000000" : "#000000",
        //     background: isActive ? "#FFF6DC" : "#FFC6AC",
        //     textDecoration: isActive ? "none" : "none",
        //   })
        // }
      >
        <div className="leftNavbar__option">Add Entries</div>
      </NavLink>
      <NavLink to="/viewentries" onClick={(event) => handleLinkClick(event)}>
        <div className="leftNavbar__option">View Entries</div>
      </NavLink>
      <NavLink to="/about" onClick={(event) => handleLinkClick(event)}>
        <div className="leftNavbar__option">About</div>
      </NavLink>
    </div>
  );
}

export default LeftNavbar;
