import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/Images/main/codingMinutesLogo.png";
import LoginButton from "../../assets/Images/main/loginButton.png";
import hamburgerIcon from "../../assets/Images/main/hamburger.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="components-outer-container navbar-border">
      <div className="navbar-outer-container">
        <div className="navbar-internal-container" id="home">
          <nav className="navigation">
            <a href="/" className="brand-name">
              <img src={Logo} alt="" />
            </a>
            <div
              className="hamburger"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <img src={hamburgerIcon} alt="" />
            </div>
            <div
              className={
                isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
              }
            >
              <ul>
                <li>
                  <a href="/#home" >Home</a>
                </li>
                <li>
                  <a href="/#courses">Courses</a>
                </li>
                <li>
                  <a href="/#campus-captains">Campus Captains</a>
                </li>

                <li>
                  <a href="https://discord.gg/jwvtDtnkJv" target="_blank">Discord</a>
                </li>
                <li>
                  <a href="https://ide.codingminutes.com" target="_blank">Online IDE</a>
                </li>
               
                <li>
                  <a href="/#team">Team</a>
                </li>
                <li>
                  <a href="/#contact">Contact us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="border-line">
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
