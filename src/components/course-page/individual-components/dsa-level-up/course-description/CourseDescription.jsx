import React from "react";
import "./courseDescription.css";
import dartIcon from "../../../../../assets/Images/main/dart.png";
import speechBubbleIcon from "../../../../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../../../../assets/Images/main/problem-solve.png";
import webDesignIcon from "../../../../../assets/Images/main/web-design.png";
import prateekBhaiyaImage from "../../../../../assets/Images/main/prateek-bhaiya.png";
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
                <h2>Course Overview</h2>
                <p>
                  Do you find yourself feeling like you get "stuck" everytime you get a coding question?
                </p>
                <p>
                  Welcome to <span>Data Structures & Algorithms, Level up Course</span> the only course that provides you an <span>ultimate practice on problem solving process</span> and helping you to take your data structures & algorithms to the next level.  The course is taught by an expert instructor <span>Prateek Narang</span> from <span>Google,</span> who is not just a software engineer but also has mentored thousands of students in becoming great programmers & developers.
                </p>
                <p>
                  The Course contains <span>25+ hours</span> of interactive video content & dozens of <span>coding exercises,</span> teaching you the right tips & tricks in problem solving in a most concise way. Every problem discussion starts with a <span>brute force approach, optimisations</span> and ends with hands-on-<span>coding video</span> in <span>C++</span> as well.
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
                  <span>BFS & DFS</span>
                  <span>Shortest Paths</span>
                </div>
                <br />
                <p>Course exercises are in C++ but programmers having experience in one or more languages (C++/Java/Python/JavaScript) can definitely do this course, provided they have fundamental understanding of data structures. The course covers both <span>breadth & depth of topics,</span> diving deep where-ever needed. You will also learn how to apply techniques involving like - <span>sorting & searching algorithms, sliding window, binary search, hashing</span> which are very important for problem solving. For advanced topics like <span>Dynamic Programming</span> & <span>Graphs,</span> the course starts from the basics & helps you master these topics from the very fundamentals.
                </p>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
