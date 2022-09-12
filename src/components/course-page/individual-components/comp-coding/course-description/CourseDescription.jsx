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
                  <span>Understand & implement important techniques in Competitive Programming</span>
                  <span>Learn advanced techniques to optimise naive solutions</span>
                  <span>Ace code-thons and online coding competitons on Codeforces, HackerRank</span>
                  <span>Get ready for ACM-ICPC, Google Kickstart, CodeJam & more</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  Equip yourself with essential programming techniques required for <span>ACM-ICPC, Google CodeJam, Kickstart, Facebook HackerCup</span> & more. Welcome to <span>Competitive Programming Essentials -</span> the ultimate specialisation on <span>Algorithms</span>  for Competitive Coders!
                </p>
                <p>
                  The online Competitive Programming Essentials by <span>Coding Minutes</span> is a highly exhaustive & rigorous course on Competitive Programming. The 50+ hours course covers the breadth & depth of algorithmic programming starting from a recap of common data structures, and diving deep into essential and advanced algorithms.
                </p>
                <p>
                  The course structure is well-researched by instructors who not only Competitive Coders but have worked with companies like <span>Google & Scaler.</span> This course will help you to get a solid grip of fundamental concepts & comes with practice questions so that you sail through online coding challenges and code-athons with ease. The course is divided into 10 modules and 50 sections covering topics like Mathematics, Number Theory, Bitmasking, Inclusion-Exclusion, Meet in the Middle Techniques, Segment Trees, Fenwick Trees, Square Root Decomposition, Graph Algorithms, Shortest Paths, Game Theory, Pattern Matching, Binary Search, Greedy Techniques, Dynamic Programming and even more.
                </p>
                <p>
                  The problem setters of the course are <span>Siddharth Singhal</span> and <span>Rajdeep Singh.</span> Both are upcoming software developers at Microsoft and Razorpay respectively. They both exhibit excellent knowledge of Data Structures and Algorithms and are avid competitive programmers.
                </p>
                <p>
                  Many top companies like <span>Google, Facebook, Amazon, Directi, CodeNation, Goldman Sachs</span> etc encourage Competitive Programming and conduct coding competitions to hire smart people who can solve problems.
                </p>
                <p><span>Course Highlights</span></p>
                <div className="overview-columns">
                  <span>Instructors from Google & Scaler Academy</span>
                  <span>50+ hours of high quality & structured content</span>
                  <span>In-depth coverage of all topics</span>
                  <span>Exhaustive Course Curriculum</span>
                  <span>Code Evaluation on Coding Exercises</span>
                  <span>Lifetime Access</span>
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
                    Apaar is an ace Competitive Programmer and upcoming Google
                    Software Engineer. He is rated 6 stars on Codechef & master
                    on Codeforces, and has worked with companies like Zomato and
                    Samsung. He loves to solve challenging problems and teach
                    students. <br /> He has been to ACM-ICPC and has won many
                    hackathons. In the past 2 years, he has mentored thousands
                    in Competitive Coding. Dynamic Programming & Graphs are his
                    favorite topics.
                  </p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/apaarkamal/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/apaargram/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
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
