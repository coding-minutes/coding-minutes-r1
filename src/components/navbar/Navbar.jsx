import React, { useState,useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/Images/main/codingMinutesLogo.png";
import DarkLogo from "../../assets/Images/main/cmlogo-white.png"
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import SignupHome from "../signup/SignupHome";
import {Link} from 'react-router-dom'

const signupLink = "https://706a22f4.sibforms.com/serve/MUIEAPhmUpgeGKQqKov3fS8iq0Pp5gQ9CMHrAASGXXqyTxCOJndh_1J0oGQhxiXJZnb5sJvqxF5tUMC1aTmVtTw4qPIrU8R_QIUeKxrTv01corxD8DBfZpXQVKCoSCqNBOmXA-HyjbUDSHmJzClv2L9qoslwYWvHXw493HKPnl0LEpdFtc_x1m3XWnhuMV4TqUQjQW5-2Dk3UQHf";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleicon, setToggleicon] = useState("nav__toggler");
  const [theme, setTheme] = useState("light-theme");
  const [image,setImage]=useState(Logo);
  
  const toggleTheme = () => {
     theme === "light-theme" ? setTheme("dark-theme") : setTheme("light-theme");
     image === Logo ? setImage(DarkLogo) : setImage(Logo);
  }
  useEffect(() => {
    document.body.className = theme;
  },[theme]);
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    toggleicon === 'nav__toggler' ? setToggleicon('nav__toggler toggle') : setToggleicon('nav__toggler');
    // if(window.scrollY >=50)
    // {
    // active=== 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    // toggleicon=== 'nav__toggler' ? setToggleicon('nav__toggler toggle') : setToggleicon('nav__toggler');
    // }
    // else if( window.innerWidth < 1200 && window.innerWidth > 460)
    // {
    //   active=== 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    //   toggleicon=== 'nav__toggler' ? setToggleicon('nav__toggler toggle') : setToggleicon('nav__toggler'); 
    // }
  }

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);

    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="components-outer-container" >

      <nav className={navbar ? 'nav sticky' : 'nav'}>
        <a href="/#" className="nav__brand"><img src={image} alt="" /></a>
        <ul className={active}>
          <li className="nav__item"><a href="/#courses" className="nav__link">Our Courses</a></li>
          <li className="nav__item"><a href="/#blogs" className="nav__link">Blogs</a></li>
          <li className="nav__item"><a href="https://discord.gg/jwvtDtnkJv" target="_blank" className="nav__link">Community</a></li>
          <li className="nav__item"><a href="/#campus-captains" className="nav__link">Be a Captain</a></li>
          <li className="nav__item"><a href="https://ide.codingminutes.com" target="_blank" className="nav__link">CM IDE</a></li>
          <li className="nav__item"><a href="/#team" className="nav__link">Mentors</a></li>
          <li className="nav__item"><Link to="/signup" className="signup-button">Sign Up</Link></li>
        </ul>
        <div className="Theme-parent">
          <div className="Theme">
            <input type="checkbox" class="checkbox" id="chk"/>
            <label class="label" for="chk" onClick={toggleTheme}>
              <FaMoon class="fas fa-moon" />
              <FaSun class="fas fa-sun" />
              <div class="ball"></div>
            </label>
          </div>
          <div className="Toggle-theme">
          <Link to="/signup" className="signup-buttonnav">Sign Up</Link>
          </div>
        </div>

        <div onClick={navToggle} className={toggleicon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
