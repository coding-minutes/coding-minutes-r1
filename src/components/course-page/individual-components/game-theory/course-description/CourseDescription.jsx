import React from "react";
import "./courseDescription.css";
import dartIcon from "../../../../../assets/Images/main/dart.png";
import speechBubbleIcon from "../../../../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../../../../assets/Images/main/problem-solve.png";
import webDesignIcon from "../../../../../assets/Images/main/web-design.png";
import prateekBhaiyaImage from "../../../../../assets/Images/main/prateek-bhaiya.png";
import mohitBhaiyaImage from "../../../../../assets/Images/main/mohit-bhaiya.png";
import apaarBhaiyaImage from "../../../../../assets/Images/main/apaar-bhaiya.png";
import youtube from "../../../../../assets/Images/main/youtube.png";
import linkedin from "../../../../../assets/Images/main/linkedin.png";
import instagram from "../../../../../assets/Images/main/instagram.png";

const CourseDescription = () => {
  return (
    <div className="components-outer-container">
      <div className="course-description-container">
        <div className="course-description-internal-container">
          <div className="description-left">
            <div className="top">
              <div className="what-you-will-learn">
                <h4>What you'll learn</h4>
                <div className="learn-columns">
                  <span>Accelerate your algorithmic thinking</span>
                  <span>Using C++ Standard Template Library</span>
                  <span>Learn to optimise brute force solutions</span>
                  <span>Become a 10x Problem Solver</span>
                  <span>Learn to apply Data Structures</span>
                  <span>Sliding Window, Hashing, Maps and Sets</span>
                  <span>Leran to write Complex Codes</span>
                  <span>Master Dynamic Programming and Graphs</span>
                  <span>150+ carefully Curated Problems </span>
                  <span>BONUS : Build a LRU Cache</span>
                  <span>Analysis of Space Time Complexity</span>
                  <span>Practice Questions on All Important Topics</span>
                </div>
              </div>
              <div className="course-overview">
                <h4>Course Overview</h4>
                <p>
                  Do you find yourself feeling like you get "stuck" everytime you get a coding question?
                </p>
                <p>
                  Welcome to Data Structure and Algorithms, Level up course, the only course that provides you an ultimate practice on problem solving process and helping you to take your data structures and algorithms on next level.
                </p>
                <p>
                  This course is taught by an expert instructor Prateek Narang from Google.
                </p>
                <div className="overview-columns">
                  <span>Arrays and Vectors</span>
                  <span>Binary Search</span>
                  <span>String Problems</span>
                  <span>Recursion Problems</span>
                  <span>Sliding Window Problem</span>
                  <span>Linked List Problem</span>
                  <span>Sorting and Searching</span>
                  <span>Stack and Queue</span>
                  <span>Binary Tree</span>
                  <span>Graph Algorithms</span>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h4>What makes us special?</h4>
              <div className="bottom-children">
                <div className="bottom-child">
                  <img src={speechBubbleIcon} alt="" />
                  <span>Unlimited doubt support</span>
                </div>
                <div className="bottom-child">
                  <img src={dartIcon} alt="" />
                  <span>Industry vetted curriculumt</span>
                </div>
                <div className="bottom-child">
                  <img src={webDesignIcon} alt="" />
                  <span>Practice codes, get feedback</span>
                </div>
                <div className="bottom-child">
                  <img src={problemSolvingIcon} alt="" />
                  <span>Intuitive and Detailed courses</span>
                </div>
              </div>
            </div>
          </div>
          <div className="description-right">
            <h4>Meet the Instructor</h4>
            <div className="instructor-group">
             
              <div className="instructor-two instructor">
                <img src={apaarBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                  Apaar is an ace Competitive Programmer and upcoming Google Software Engineer. He is rated 6 stars on Codechef & master on Codeforces, and has worked with companies like Zomato and Samsung. He loves to solve challenging problems and teach students. <br/> He has been to ACM-ICPC and has won many hackathons. In the past 2 years, he has mentored thousands in Competitive Coding. Dynamic Programming & Graphs are his favorite topics.
                  </p>
                  <div className="social-links">
                  <a href="https://www.linkedin.com/in/apaarkamal/" target="_blank"><img src={linkedin} alt="" /></a>
                  <a href="https://www.instagram.com/apaargram/" target="_blank"><img src={instagram} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;