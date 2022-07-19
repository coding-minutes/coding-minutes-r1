import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assets/Images/main/codingMinutesLogo.png";


const Navbar = () => {
   const [active, setActive] = useState("nav__menu");
   const [toggleicon, setToggleicon] = useState("nav__toggler");
   const navToggle = () => {
    if(window.scrollY >=50)
    {
    active=== 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
    toggleicon=== 'nav__toggler' ? setToggleicon('nav__toggler toggle') : setToggleicon('nav__toggler');
    }
    else if( window.innerWidth < 1200 && window.innerWidth > 460)
    {
      active=== 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
      toggleicon=== 'nav__toggler' ? setToggleicon('nav__toggler toggle') : setToggleicon('nav__toggler'); 
    }
   }
   const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >=50)
    {
      setNavbar(true);

    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="components-outer-container" >
   
          <nav className={navbar ? 'nav sticky' : 'nav'}>
            <a href="/#" className="nav__brand"><img src={Logo} alt="" /></a>
            <ul className={active}>
              <li className="nav__item"><a href="/#courses" className="nav__link">Course</a></li>
              <li className="nav__item"><a href="/#blogss" className="nav__link">Blogs</a></li>
              <li className="nav__item"><a href="/#campus-captains" className="nav__link">Campus Captains</a></li>
              <li className="nav__item"><a href="https://discord.gg/jwvtDtnkJv" className="nav__link">Community</a></li>
              <li className="nav__item"><a href="https://ide.codingminutes.com" className="nav__link">Online IDE</a></li>
              <li className="nav__item"><a href="/#team" className="nav__link">Team</a></li>
              <li className="nav__item"><a href="/#contact" className="nav__link">Contact us</a></li>
            </ul>
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
