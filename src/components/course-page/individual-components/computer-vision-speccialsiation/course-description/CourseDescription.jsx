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
                  <span>Learn to write Complex Codes</span>
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
                  <span>Industry vetted curriculum</span>
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
              <div className="instructor-one instructor">
                <img src={prateekBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Prateek is a popular programming instructor and an ace
                    software engineer, currently working with Scaler and created
                    Coding Minutes. He is known for his amazingly simplified
                    explanations that make everyone fall in love with
                    programming. <br /> He has over 5+ years of teaching
                    experience and has trained over 75,000 students in classroom
                    boot camps & online courses in the past.
                  </p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/prateeknarang27/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/prateeknarang27/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                    <a
                      href="https://www.youtube.com/c/PrateekNarang27"
                      target="_blank"
                    >
                      <img src={youtube} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="instructor-two instructor">
                <img loading="lazy" src={mohitBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Mohit is a Data Scientist programming instructor and co-creator at Coding Minutes. He has trained over 10000+ students in Machine Learning, and AI over the last 2 years of his teaching experience. His expertise lies in Python, data science, machine learning and AI, and he has won many competitions. <br /> He has been doing AI-based projects for the last 4 years. He also leads the ML and Data Science Domain of Coding Minutes.
                  </p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/mohituniyal/" target="_blank"><img src={linkedin} alt="" /></a>
                    <a href="https://www.instagram.com/mohituniyal2010/" target="_blank"><img src={instagram} alt="" /></a>
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
