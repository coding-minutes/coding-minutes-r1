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
              <h1>Data Structures and Algorithms Essentials</h1>
            </div>
            <div className="short-info">
            Master core computer science concepts by mastering data structures, algorithms & problem solving using C++

            </div>
            <div className="price-info">
            <span className="first">₹ 389</span>
              <span className="middle">₹ 18,560</span>
              <span className="last">Use Code: BLACKFRIDAY360</span>
            </div>
            <div className="udemy-info">
              <a href="https://www.udemy.com/course/cpp-data-structures-algorithms-prateek-narang/?couponCode=BLACKFRIDAY360"  target="_blank">Enroll now on Udemy</a>
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
