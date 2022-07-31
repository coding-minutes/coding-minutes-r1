import React from "react";
import "./statistics.css";
// import CMStatistics from "../../assets/Images/main/cm-statistics.svg";
import CMStatistics from "../../assets/Images/main/cm-statistics-updated.svg";
import CountUp from 'react-countup';


const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-internal-container">
        <div className="statistics-main">
          <h2 className="statistics-our-journey">Our journey so far</h2>
          <div className="statistics-sections">
            <div className="statistics-section">
              <h2>4.7⭐</h2>
              <span>Course Ratings</span>
            </div>
            <div className="statistics-border"></div>
            <div className="statistics-section">
              <h2><CountUp start={0} end={70000} duration={6} separator="," />+</h2>
              <span>Enrollments</span>
            </div>
            <div className="statistics-border"></div>
            <div className="statistics-section">
              <h2><CountUp start={0} end={150} duration={2.75} separator="," />+</h2>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics;
