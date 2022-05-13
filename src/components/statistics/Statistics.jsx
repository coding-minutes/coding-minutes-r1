import React from "react";
import "./statistics.css";
import CMStatistics from "../../assets/Images/main/cm-statistics.svg";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-image">
        <img src={CMStatistics} alt="" />
      </div>
    </div>
  );
};

export default Statistics;
