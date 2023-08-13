import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { headerImage } from '../../assets'

const Header = () => {
  return (
    <div className="normal-outer-container">
      <div className="components-outer-container">
        <div className="header-container">
          <div className="left" data-aos="fade-right">
            <div className="first">
              <h1>Biggest Sale of Season 🇮🇳</h1>
              <h1 className="cm-gradient-text">Our Freedom Sale is Live</h1>
              {/* <h1 className="cm-gradient-text">Get earlybird 90% off!</h1> */}
            </div>
            <div className="second">
              <p><strong>Top-notch courses</strong> with interactive content, Ex-google
                instructors, TA support, Projects & Assignments.</p>
            </div>
            {/* <div className="second">
              <p><strong>28 hours of immersive content</strong> with 8+ hands-on industry
                projects with lifetime access!</p>
            </div> */}
            <div className="third">
              <button className="cm-gradient-button"><a href="#courses">Explore Courses</a></button>
            </div>
          </div>
          <div className="right" data-aos="fade-left">
            <div className="header-image">
              <img src={headerImage} alt="header" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
