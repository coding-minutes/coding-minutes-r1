import React from "react";
import "./header.css";
import headerImage from "../../assets/Images/main/header-image.png";

//aos_offset

const Header = () => {
  
  return (
    <div className="components-outer-container" >
      <div className="header-outer-container">
        <br />
        <div className="border-line">
        
      </div>
      <br />
        <div className="header-internal-container">
          <div className="header-left" data-aos="fade-right" aos_offset="5000">
            <div className="header-left-tagline">
              <h1>Engineer's Week Special Sale🚀</h1>
              <h1 className="h3-second">Get 90% Off On All Courses!</h1>
            </div>
            <div className="header-left-text">
              <p>
              <span className="header-breakPoint">   <span>Pocket friendly courses</span> with interactive content, top-notch </span>
                instructors, TA support, Projects & Assignments.
              </p>
              {/* <p>
              Use code <span>JULY420</span> to avail all courses at <span>₹360</span>+taxes. This offer is valid till 21st July.  
              </p> */}
            </div>
            <div className="header-left-buttons">
              <div className="explore-courses">
                <a href="#courses">
                  {/* <img src={exploreCoursesImage} alt="" /> */}
                  <span>Explore courses</span>
                </a>
              </div>
              {/* <div className="learn-more"> */}
                {/* <a href="#courses"> */}
                  {/* ▶ Learn more */}
                  {/* <img src={learnMoreImage} alt="" /> */}
                {/* </a> */}
              {/* </div> */}
            </div>
          </div>
          <div className="header-right" data-aos="fade-left">
            <div className="header-right-image">
              <img  loading="lazy"  src={headerImage} alt="Landing Image" />
            </div>
          </div>
        </div>
      
      </div>

    </div>
  );
};

export default Header;
