// import logo from '../logo.svg';
// import './App.css';\
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useState } from "react";

export function Navbar() {
  // const [btnstate, setbtnstate] = useState(false);

  // const handleClick = () => {
  //   console.log("handleClick");
  //   setbtnstate(btnstate => !btnstate);
  // }
  // let menu = btnstate ? 'is-active' : '';

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <>
      <div className="nav-wrapper">
        <div className="navbar navibar">
          <img src={"./Log3.png"} alt="img" className="logo" />
          <div
            className={isActive ? "menu-toggle is-active" : "menu-toggle"}
            id="mobile-menu"
            onClick={handleClick}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={isActive ? "nav mobile-nav" : "nav"}>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/Loginform">Login Form</a>
            </li>
            <li className="nav-item">
              <a href="/table">Table</a>
            </li>
            <li className="nav-item">
              <a href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="grad-bar"></div>
      </div>
    </>
  );
}

export default Navbar;
