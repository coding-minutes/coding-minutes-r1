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
                <h2>What you'll learn</h2>
                <div className="learn-columns">
                  <span>Learn in-depth Game Theory Concepts</span>
                  <span>Learn to solve Competitive Programming Questions</span>
                  <span>Problems involving Nim Game, Sprague-Grundy Theorem</span>
                  <span>Combinatorial Games, Subtraction Games, Games as Graphs</span>
                  <span>Learn by solving Easy, Medium & Hard problems</span>
                  <span>Hands-on Coding for every Game Theory Challenge</span>
                </div>
              </div>
              <div className="course-overview">

                <h2>Course Overview</h2>
                <br />
                <p>
                  This hands-on course is designed for <span>everyone</span> to learn & implement Game Theory concepts to solve <span>Competitive Programming Challenges.</span> You will learn how approach Game Theory based questions involving - Nim Game, Sprague Grundy Theorem, Subtraction Games, Combinatorial Games, Graph Games, Take-away games! The course involves both breadth and depth of these topics with enough examples and hands-on coding for each problem.
                </p>
                <p>
                  <span>Competitive programming or Sport Programming</span> is a mind sport usually, involving participants trying to program according to provided specifications. Competitive programming is recognised and supported by several multinational software and Internet companies, such as Google and Facebook. Popular Competitive Programming platforms include Codeforces, Codechef, HackerEarth, HackerRank, Spoj and more! This course is designed for both beginners and advanced programmers looking forward to take the next leap in Competitive Programming!
                </p>
                <p>
                  Participation in programming contests can increase student enthusiasm for computer science studies. The skills acquired in ICPC-like programming contests also improve career prospects,  which often require candidates to solve complex programming and algorithmic problems on the spot.
                </p>
                <p>
                  This comprehensive course is taught by <span>Apaar Kamal</span>, who is a highly successful competitive coder and popular bootcamp Udemy Instructor and has taught <span>thousands of students</span> in several online and in-person courses over last <span>2+ years.</span> This is <span>deep-dive course,</span> we not just delve into theory but focus on the practical aspects by <span>solving multiple game theory problems of various difficulty levels.</span>
                </p>
                <p>
                  The course starts with basics of Game Theory and then diving deeper topics! Here are some of the topics that you will learn in this course.
                </p>
                <div className="overview-columns">
                  <span>Combinatorial Games</span>
                  <span>Take-away Games</span>
                  <span>N/P Positions</span>
                  <span>Game of Nim</span>
                  <span>Nim-Sum</span>
                  <span>Applications of Nim-Sum</span>
                  <span>Similar Nim-Games</span>
                  <span>Games as Graphs</span>
                  <span>Sprague Grundy Function</span>
                  <span>Sprague Grundy Theorem</span>
                  <span>20+ Problems with Code</span>
                </div>
              </div>
            </div>
            <div className="bottom">
              <h2>What makes us special?</h2>
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
            <h2>Meet the Instructor</h2>
            <div className="instructor-group">

              <div className="instructor-two instructor">
                <img loading="lazy" src={apaarBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Apaar is an ace Competitive Programmer and upcoming Google Software Engineer. He is rated 6 stars on Codechef & master on Codeforces, and has worked with companies like Zomato and Samsung. He loves to solve challenging problems and teach students. <br /> He has been to ACM-ICPC and has won many hackathons. In the past 2 years, he has mentored thousands in Competitive Coding. Dynamic Programming & Graphs are his favorite topics.
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
