import React from 'react'
import CountUp from 'react-countup';

import './statistics.css';

const Statistics = () => {
  return (
    <div className="normal-outer-container">

      <div className="components-outer-container">
        <div className="statistics-container cm-gradient" data-aos="fade-up">
          <div className="top"><h2>Our journey so far</h2></div>
          <div className="bottom">
            <div className="first item">
              <h2>4.7⭐</h2>
              <span className="span-class">Course Ratings</span>
            </div>
            <div className="border"></div>
            <div className="second item">
              <h2><CountUp start={0} end={100000} duration={6} separator="," />+</h2>
              <span className="span-class">Enrollments</span>
            </div>
            <div className="border"></div>
            <div className="third item">
              <h2><CountUp start={0} end={150} duration={6} separator="," />+</h2>
              <span className="span-class">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics