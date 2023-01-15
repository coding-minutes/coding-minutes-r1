import React from 'react'
import { Link } from 'react-router-dom'
import { campusCaptainImage } from '../../assets'

import './campusCaptains.css'

const CampusCaptains = () => {
  return (
    <div className="campus-captains-outer-container">
      <div className="components-outer-container">
        <div className="campus-captains-container" data-aos="fade-up" id="campus-captains">
          <div className="left">
            <h1>Campus Captain 🏁</h1>
            <p>Become a Campus Captain for your campus. win swags, Coding T-Shirts & cash incentives!
            </p>
            <button className='cm-gradient'><a href="https://forms.gle/uk9138Rqg55KssWS7" className="campus-captain-button">Join as Campus Captains</a></button>
          </div>
          <div className="right">
            <img src={campusCaptainImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusCaptains