import React, {useState, useEffect} from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

import './footer.css'
import { logoBlack,logoWhite } from '../../assets'
import { navData } from '../navbar/Navbar'

const Footer = () => {

  const initialThemeState = JSON.parse(localStorage.getItem('themeSettings'))
  const [theme, setTheme] = useState(initialThemeState)
  const [logo, setLogo] = useState(initialThemeState === 'light-theme' ? logoBlack : logoWhite);
  useEffect(() => {
    setLogo(initialThemeState === 'light-theme' ? logoBlack : logoWhite);
  }, [theme]);
  


  const linkedin = "https://www.linkedin.com/company/codingminutes"
  const instagram = "https://www.instagram.com/codingminutes/"
  const youtube = "https://www.youtube.com/@CodingMinutes";



  return (
    <div className="super-container">
      <div className="components-outer-container">
        <div className="footer-container">
          <div className="first">
            <div className="top">
              <img src={logo} alt="" />
            </div>
            <div className="bottom">
              <p>Coding Minutes was started with a mission to provide affordable & high quality education for everyone. With Udemy as our technology partner, we wish to bring all our courses with top-notch content to our students at pocket friendly prices with lifetime access.</p>
              <p>©2023 Coding Minutes. All rights reserved</p>
            </div>
          </div>
          <div className="second">
            <ul>
              {navData.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="footer-nav">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="third">
            <div className="top">
              <p>Get in Touch</p>
              <div className="social-icons">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <BsInstagram />
                </a>
                <a href={youtube} target="_blank" rel="noreferrer">
                  <BsYoutube />
                </a>
              </div>
            </div>
            <div className="bottom">
              <p>Contact Us</p>
              <a href="tel:+918947050005"> +91 8947050005 </a>
              <a href="mailto:hello@codingminutes.com">hello@codingminutes.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer