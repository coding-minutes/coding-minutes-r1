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
              <h1>Black Friday Sale</h1>
              <h1 className="cm-gradient-text">is LIVE</h1>
              {/* <h1 className="cm-gradient-text">Flat 95% OFF</h1> */}
            </div>
            <div className="second">
              <p><strong>Most loved courses</strong> with interactive content, Learn with Google
                Engineers, TA support, Projects & Assignments.</p>
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
