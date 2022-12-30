import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'
import { logoBlack, logoWhite } from '../../assets'
import { FaSun, FaMoon } from 'react-icons/fa'
import { RiMenu2Line } from 'react-icons/ri'
import { MdClose } from 'react-icons/md';

export const navData = [
  { id: 1, name: "Our Courses", link: "/#courses" },
  { id: 2, name: "Blogs", link: "/#blogs" },
  { id: 3, name: "Community", link: "https://discord.gg/jwvtDtnkJv" },
  { id: 4, name: "Be a Captain", link: "/#campus-captains" },
  { id: 5, name: "CM IDE", link: "https://ide.codingminutes.com/" },
  { id: 6, name: "Mentors", link: "/#mentors" },
]

const Navbar = () => {
  const initialThemeState = JSON.parse(localStorage.getItem('themeSettings')) || 'dark-theme';
  const [toggleIcon, setToggleIcon] = useState(initialThemeState === 'light-theme' ? <FaMoon /> : <FaSun />);
  const [theme, setTheme] = useState(initialThemeState);
  const [logo, setLogo] = useState(initialThemeState === 'light-theme' ? logoBlack : logoWhite);
  const [mobileNav, setMobileNav] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <=1000 ? true : false;

  const updateDimensions = () => {
    const { innerWidth: width } = window;
    setWidth(width);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('themeSettings', JSON.stringify(theme));
    setLogo(theme === 'light-theme' ? logoBlack : logoWhite);
    setToggleIcon(theme === 'light-theme' ? <FaMoon /> : <FaSun />);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }
  const toggleMenu = () => {
    setMobileNav(prev => !prev)
  }
  const currentStatus = 'active';

  return (
    <div className='components-no-outer-container'>
      <div className="nav-container">
        <div className="first">
          <a href="/#"> <img src={logo} alt="" /></a>
        </div>
        <div className="second">
          <ul>
            {navData.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="third">
          <div className="theme-control">
            <input type="checkbox" className="checkbox" name="check" id="check"/>
          
            <label htmlFor="check" onClick={toggleTheme}><span className='first'>{<FaSun />}</span><span className='second'>{<FaMoon />}</span>
              <div className={`ball ${theme==='light-theme' ? 'ball-left' : 'ball-right'}`}></div></label>
          </div>
          <button className='cm-gradient-button'><Link to="/signup" className='signup-button'>Sign Up</Link></button>
          <span className='menu-btn' onClick={toggleMenu} style={isMobile===true ? mobileNav===true ? { display: 'block' } : { display: 'none' }: null}>{<RiMenu2Line />}</span>
        </div>
        <div className={`mobile-nav`} style={isMobile===true ? mobileNav===true ? { display: 'none' } : { display: 'block' }: null}>

          <a href="/#"> <img src={logo} alt="" onClick={toggleMenu} /></a>
          <span className="close-btn" onClick={toggleMenu}><MdClose /></span>
          <ul>
            {navData.map((item) => (
              <li key={item.id}>
                <a href={item.link} onClick={toggleMenu}>{item.name}</a>
              </li>
            ))}
          </ul>
          <button className='cm-gradient-button'><Link to="/signup" className='signup-button'>Sign Up</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar