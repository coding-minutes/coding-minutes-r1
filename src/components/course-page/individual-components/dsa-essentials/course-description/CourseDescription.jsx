import React from "react";
import "./courseDescription.css";
import dartIcon from "../../../../../assets/Images/main/dart.png";
import speechBubbleIcon from "../../../../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../../../../assets/Images/main/problem-solve.png";
import webDesignIcon from "../../../../../assets/Images/main/web-design.png";
import prateekBhaiyaImage from "../../../../../assets/Images/main/prateek-bhaiya.png";
import mohitBhaiyaImage from "../../../../../assets/Images/main/mohit-bhaiya.png";
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
                  <span>Core concepts & internals of Data Structures</span>
                  <span>Trees, Linked Lists, Heaps, Graphs</span>
                  <span>Build all data structures from scratch</span>
                  <span>Object Oriented Programming Basics</span>
                  <span>Learn to apply Data Structures</span>
                  <span>Brute Force & Optimisation Techniques</span>
                  <span>Space Time Complexity Analysis</span>
                  <span>Hash Functions, Collision Handling</span>
                  <span>Recursion & Backtracking</span>
                  <span>Dynamic Memory & Pointers</span>
                  <span>Create your own DS library!</span>
                  <span>C++ Standard Template Library Basics</span>
                  <span>Project - Design & Implement Shopping Cart</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  Are you a <span>beginner</span> looking to enter the world of Data Structures or <span>intermediate</span> programmer wondering what happens behind a Hash-table?
                </p>
                <p>
                  Welcome to <span>Data Structures & Algorithms, Essentials Course</span> - the only course you need to understand the core concepts behind Data Structures & build a solid programming foundations using C++ . The course is taught by an expert instructor <span>Prateek Narang</span> from <span>Google</span>, who is not just a <span>software engineer</span> but also has mentored thousands of students in becoming great programmers & developers and is <span>top rated on Udemy</span> for his amazing teaching skills.
                </p>
                <p>
                  Every software application revolves around data, performing different operations like Insert, Delete, Update & Search. To be a great software developer, understanding of Data Structures & Algorithms is must and this course provides you a deep understanding of the topic by covering both the theory and <span>hands-on-implementation of each data structure from scratch.</span>
                </p>
                <p>
                  The Course contains <span>20+ hours</span> of interactive video content & dozens of <span>coding exercises,</span> teaching you all essential concepts starting from ground zero. Each section covers data structure in great detail, with <span>Coding Exercises</span> & <span>real life examples</span>.
                </p>
                <p>
                  <span>Here is what you will learn :</span>
                </p>
                <div className="overview-columns">
                  <span>Bit masking</span>
                  <span>Object Oriented Programming Basics</span>
                  <span>Pointers & Dynamic Memory (C++)</span>
                  <span>Recursion</span>
                  <span>Array, 2D Array, Strings, Vectors</span>
                  <span>Linked Lists, Stacks, Queues</span>
                  <span>Trees, BST, Tries</span>
                  <span>Heaps/Priority Queues</span>
                  <span>Hash-tables, Collision Handling</span>
                  <span>Graphs</span>
                  <span>Brute Force, Backtracking</span>
                  <span>Sorting & Searching</span>
                  <span>Divide & Conquer</span>
                  <span>Dynamic Programming</span>
                </div>
                <br />
                <p>
                  The course is designed for <span>beginner & intermediate programmers.</span> We try to make not so easy topics look easy with intuitive explanations & interactive video lectures with dozens of memes ;) The course finishes with a final mini project - a command line app for an online shopping cart combining principles from Object Oriented Programming & Data Structures.</p>
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
