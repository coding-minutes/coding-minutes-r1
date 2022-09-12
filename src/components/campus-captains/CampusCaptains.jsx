import React from "react";
import "./campusCaptains.css";
import campusCaptainButton from "../../assets/Images/main/join-as-campus-captain.svg";
import rocketMan from "../../assets/Images/main/rocket-man.png";
import { Link } from 'react-router-dom';
import campusCaptainImage from "../campus-captains-form/campus-captains.svg";

const CampusCaptains = () => {

  return (
    <div className="components-outer-container">
      <div className="campus-captain-outer-container" data-aos="fade-up" data-aos-offset="200">
        <div className="campus-captain-inner-container" id="campus-captains">
          <div className="campus-captain-left">
            <h1><span>Campus Captain </span>🏁 </h1>
            <p>
              Become a Campus Captain for your campus. win swags, Coding
              T-Shirts & cash incentives!
            </p>
            <Link to="/campus-captains">
              <img loading="lazy" src={campusCaptainButton} alt="" />
            </Link>
          </div>
          <div className="campus-captain-right">
            <div className="right-image">
              <img loading="lazy" src={rocketMan} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusCaptains;
