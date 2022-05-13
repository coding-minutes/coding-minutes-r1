import React from "react";
import "./header.css";
import learnMoreImage from "../../assets/Images/main/learn-more.svg";
import exploreCoursesImage from "../../assets/Images/main/explore-courses.svg";
import headerImage from "../../assets/Images/main/header-image.png";

const Header = () => {
  return (
    <div className="components-outer-container">
      <div className="header-outer-container">
        <div className="header-internal-container">
          <div className="header-left">
            <div className="header-left-tagline">
              <h3>Kickstart your</h3>
              <h3 className="h3-second">Coding Career in Minutes</h3>
            </div>
            <div className="header-left-text">
              <p>
                <span>Pocket friendly courses</span> with interactive content,
                top-notch instructors, TA support, Projects & Assignments.
              </p>
            </div>
            <div className="header-left-buttons">
              <div className="explore-courses">
                <a href="#courses">
                  <img src={exploreCoursesImage} alt="" />
                </a>
              </div>
              <div className="learn-more">
                <a href="#courses">
                  {/* ▶ Learn more */}
                  <img src={learnMoreImage} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="header-right-image">
              <img src={headerImage} alt="" />
            </div>
          </div>
        </div>
      
      </div>

    </div>
  );
};

export default Header;
