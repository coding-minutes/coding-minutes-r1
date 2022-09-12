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
                  <span>Identify what type of problems can be solved using DP</span>
                  <span>Come with recurrence for most DP Problems</span>
                  <span>Master the advance DP techniques</span>
                  <span>Face interviews and online challenges more confidently</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  Are you feeling brushed-up with data structures and algorithms but often feel stuck when it comes to DP! But no more, we are super happy to present the <span>Dynamic Programming Specialisation Course</span> for everyone, to help you master the important Dynamic Programming Concepts and level up for <span>Competitive Coding & Interviews.</span>
                </p>
                <p>
                  The Dynamic Programming Master Course is taught by <span>Apaar Kamal,</span> software engineer at Google & Master on <span>Codeforces</span> along with <span>Prateek Narang,</span> an ex-Google engineer and founder of <span>Coding Minutes.</span> This highly detailed & rigorous curriculum has been designed to ensure your success in online competitions where Dynamic Programming problems are very common these days.
                  Many top companies like Google, Facebook, Amazon, Directi, CodeNation, Goldman Sachs etc encourage Competitive Programming and conduct coding competitions to hire smart people who can solve problems.
                </p>
                <p>
                  Dynamic Programming is a popular algorithmic technique in computer programming that helps to efficiently solve a class of problems that have overlapping subproblems and optimal substructure property.
                </p>
                <p>
                  If any problem can be divided into subproblems, which in turn are divided into smaller subproblems, and if there are overlapping among these subproblems, then the solutions to these subproblems can be saved for future reference. In this way, algorithm can be improved, and lot of problems can be optimised using Dynamic Programming.
                </p>
                <p>
                  The 40+ hours course covers the breadth & depth of dynamic programming starting from a recap of <span>recursion, backtracking,</span> and diving deep into Dynamic Programming techniques like  -
                </p>
                <div className="overview-columns">
                  <span>1D, 2D, Multi-dimensional DP</span>
                  <span>DP and Partition Problems</span>
                  <span>DP for Combinatorics & Subsequences</span>
                  <span>DP on Strings</span>
                  <span>Digit DP</span>
                  <span>DP on Trees & Graphs</span>
                  <span>SOS DP and</span>
                  <span>DP with Bitmasks</span>
                  <span>DP and Matrix Exponentiation</span>
                  <span>DP in Game Theory</span>
                  <span>DP with advanced data structures</span>
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
              <div className="instructor-one instructor">
                <img loading="lazy" src={prateekBhaiyaImage} alt="" />
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
                <img src={apaarBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Apaar is an ace Competitive Programmer and upcoming Google Software Engineer. He is rated 6 stars on Codechef & master on Codeforces, and has worked with companies like Zomato and Samsung. He loves to solve challenging problems and teach students. <br /> He has been to ACM-ICPC and has won many hackathons. In the past 2 years, he has mentored thousands in Competitive Coding. Dynamic Programming & Graphs are his favorite topics
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
