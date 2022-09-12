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
                  <span>Complete Python3 Programming</span>
                  <span>Logic Building & Problem Solving</span>
                  <span>Object Oriented Programming</span>
                  <span>Inheritance & Polymorphism</span>
                  <span>Intermediate - Advanced Python Concepts</span>
                  <span>Modules & Packages</span>
                  <span>File & Exception Handling</span>
                  <span>30+ Algorithmic Problems</span>
                  <span>Project - Markov Text Generation</span>
                  <span>Project - URL Shortner</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  Welcome to <span>Python Programming Master Course (2021) -</span> <span>the most comprehensive & robust Python3 Course</span> by <span>Coding Minutes</span> designed for absolute beginners & developers!
                </p>
                <p>
                  Python is the hottest programming language of the 21st century. It is widely in <span>Machine Learning & Data Science.</span> Many top companies like <span>Instagram, Spotify, Netflix, Google, Dropbox</span> use python extensively for their projects which includes building <span>web apps, data pipelines, data analysis & visualisation, deep learning</span> at scale and large scale distributed systems.
                </p>
                <p>
                  This is the <span>most comprehensive and detailed course</span> for the Python programming language taught by <span>Mohit Uniyal who is a data scientist turned instructor & Prateek Narang, a Google Engineer & algorithms instructor!</span> Both the instructors have taught thousands of students in the last few years and have received amazing reviews. Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you!
                </p>
                <p>
                  With <span>over 200+ lectures</span> and more than 18 hours of video, this course ensures you build a solid foundation in Python. This course includes quizzes, mock tests, coding exercises and <span>practical projects</span> - URL Shortener & Text Generation.
                </p>
                <p>
                  This is a completely hands-on course, with interactive videos & coding in <span>Jupyter Notebooks</span>. You get the <span>complete code repository</span> to practice & revise on your machine.
                </p>
                <div className="overview-columns">
                  <span>Installing Python</span>
                  <span>Different ways of running Python code</span>
                  <span>Python Fundamentals - Syntax</span>
                  <span>Operators and Expressions</span>
                  <span>Conditional Statements</span>
                  <span>For & while Loop</span>
                  <span>Lists & Tuples</span>
                  <span>Sets & Dictionaries</span>
                  <span>Functions</span>
                  <span>Arbitrary and Keyword arguments</span>
                  <span>Built-in Functions</span>
                  <span>File Handling & Error Handling</span>
                  <span>Modules & Packages</span>
                  <span>Object-Oriented Programming</span>
                  <span>Inheritance & Polymorphism</span>
                  <span>Iterators</span>
                  <span>Generators</span>
                  <span>Decorators</span>
                </div>
                <br />
                <p><span>So what are you waiting for? Join Prateek & Mohit in this amazing journey, and start your journey of becoming a Python Champion today!  Looking forward to see you in the course.</span></p>
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
                <img src={mohitBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                    Mohit is a Data Scientist programming instructor and
                    co-creator at Coding Minutes. He has trained over 10000+
                    students in Machine Learning, and AI over the last 2 years
                    of his teaching experience. His expertise lies in Python,
                    data science, machine learning and AI, and he has won many
                    competitions. <br /> He has been doing AI-based projects for
                    the last 4 years. He also leads the ML and Data Science
                    Domain of Coding Minutes.
                  </p>
                  <div className="social-links">
                    <a
                      href="https://www.linkedin.com/in/mohituniyal/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/mohituniyal2010/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="instructor-two instructor">
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
