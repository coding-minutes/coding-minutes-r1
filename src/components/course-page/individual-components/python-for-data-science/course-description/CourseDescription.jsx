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
                  <span>Python fundamentals for beginners!</span>
                  <span>Learn to use Python for Data Science</span>
                  <span>Data Acquistion using Beautiful Soup, Scrapy</span>
                  <span>Automation using Selenium</span>
                  <span>Data Analysis using Numpy, Pandas, SQL</span>
                  <span>Data Visualisation using Seaborn, Matplotlib</span>
                  <span>Introduction to Machine Learning</span>
                  <span>Building 5 projects using data science concepts</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                Are you ready to take the next leap in your journey to become a Data Scientist?
                </p>
                <p>
                This hands-on course is designed for <span>absolute beginners as well as for proficient programmers</span> who want to use the Python for solving real life problems. You will learn how analyse data, make interesting data visualisations, drive insights, scrape web, automate boring tasks and working with databases using SQL.
                </p>
                <p>
                Data Science has one of the most rewarding jobs of the 21st century and fortune-500 tech companies are spending heavily on data scientists! Data Science as a career is very rewarding and offers one of the highest salaries in the world. This course is designed for both beginners with some programming experience or experienced developers looking to enter the world of Data Science!
                </p>
                <p>
                This comprehensive course is taught by <span>Mohit Uniyal,</span> who is a popular Data Science Bootcamp instructor in India and has taught thousands of students in several online and in-person courses over <span>last 3+ years.</span> This course is worth thousands of dollars, but <span>Coding Minutes</span> is providing you this course to you at a <span>fraction of its original cost!</span>  This is <span>action oriented course,</span> we not just delve into theory but focus on the practical aspects by building 5 projects. With over <span>150+ High Quality video lectures, easy to understand explanations</span> and <span>complete code repository</span> this is one of the most detailed and robust course for learning data science.
                </p>
                <p>
                The course starts with basics of Python and then diving deeper into data science topics! Here are some of the topics that you will learn in this course.
                </p>
                <div className="overview-columns">
                  <span>Programming with Python</span>
                  <span>Numeric Computation using NumPy</span>
                  <span>Data Analysis using Pandas</span>
                  <span>Data Visualisation using Matplotlib</span>
                  <span>Data Visualisation using Seaborn</span>
                  <span>Fetching data from Web API's</span>
                  <span>Data Acquisition</span>
                  <span>Web Scraping using Beautiful Soup</span>
                  <span>Building a Web Crawler using Scrapy</span>
                  <span>Automating boring stuff using Selenium</span>
                  <span>Language of Databases - SQL!</span>
                  <span>Introduction to Machine Learning</span>

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
                <img src={mohitBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                  Mohit is a Data Scientist programming instructor and co-creator at Coding Minutes. He has trained over 10000+ students in Machine Learning, and AI over the last 2 years of his teaching experience. His expertise lies in Python, data science, machine learning and AI, and he has won many competitions. <br/> He has been doing AI-based projects for the last 4 years. He also leads the ML and Data Science Domain of Coding Minutes.
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
