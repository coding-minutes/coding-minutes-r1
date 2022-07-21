import React from "react";
import "./coursetitle.css";
import dartIcon from "../../../../../assets/Images/main/dart.png";

const CourseTitle = () => {
  return (
    <div className="course-title-outer-container">
      <div className="components-outer-container">
      <br />
        <div class="navspace"></div>
        <br />
        <div className="course-title-inner-container">
          <div className="course-title-left">
            <div className="title">
              <img src={dartIcon} alt="" />
              <h1>Python for Data Science Master Course</h1>
            </div>
            <div className="short-info">
            Level up in Data Science using Python, master Numpy, Pandas, Data Visualisation, Web Scraping, Automation, SQL & more.!
            </div>
            <div className="price-info">
            <span className="first">₹ 420+taxes</span>
              <span className="middle">₹ 18,560</span>
              <span className="last">Use code : JULY420</span>
            </div>
            <div className="udemy-info">
              <a href="https://www.udemy.com/course/python-data-science-master-course/?couponCode=JULY420"  target="_blank">Enroll now on Udemy</a>
              <span className="stars">⭐⭐⭐⭐⭐ 4.88/5.0</span>
            </div>
          </div>
          <div className="course-title-right">
            <div className="intro-lecture">
              {/* <iframe
                width="400"
                height="267"
                src="https://www.youtube-nocookie.com/embed/bN4erfb3cKw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
              <iframe width="400" height="267" src="https://www.youtube.com/embed/ILXTx4nlbJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTitle;
