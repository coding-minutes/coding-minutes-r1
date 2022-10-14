import React from "react";
import "./coursetitle.css";
import dartIcon from "../../../../../assets/Images/main/dart.png"

const CourseTitle = () => {
  return (
    <div className="course-title-outer-container">
      <div className="components-outer-container">
        <div className="course-title-inner-container">
          <div className="course-title-left">
            <div className="title">
              <img src={dartIcon} alt="" />
              <h3>Machine Learning Essentials</h3>
            </div>
            <div className="short-info">
            Machine Learning Essentials Course is coming soon on #Udemy!
            </div>
            <div className="price-info">
              <span className="first">₹ 420</span>
              <span className="middle">₹ 18,560</span>
              <span className="last">Use Code: HAPPYDIWALI</span>
            </div>
            <div className="udemy-info">
              <a href="#">Coming Soon</a>
              <span className="stars">⭐⭐⭐⭐⭐ 4.88/5.0</span>
            </div>
          </div>
          <div className="course-title-right">
            <div className="intro-lecture">
              <iframe
                width="400"
                height="267"
                src="https://www.youtube-nocookie.com/embed/bN4erfb3cKw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
