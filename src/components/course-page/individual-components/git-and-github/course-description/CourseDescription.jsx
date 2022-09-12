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
                  <span>Understand Version Control Systems</span>
                  <span>Master Git, the most popular VCS</span>
                  <span>Git Workflow - Staging area, git commits, git diff</span>
                  <span>Branching - Creating and Merging Branches</span>
                  <span>Deploying a Git Repository on Github</span>
                  <span>Using Github Pages to deploy websites</span>
                  <span>How to collaborate as a team</span>
                  <span>Moving back and forth in git timeline</span>
                  <span>Advanced Git Features - Rebasing, Stashing, Branching, Merge Conflicts</span>
                  <span>Project Work - Create a Web Portfolio</span>
                </div>
              </div>
              <div className="course-overview">
                <h2>Course Overview</h2>
                <br />
                <p>
                  If you are curious to know how big tech giants manage multiple versions of their projects? In this course, you will learn everything related to version control systems.
                </p>
                <p>
                  Welcome to the <span>Git & Github Master course (2021).</span> This course is designed for absolute beginners who have no experience in project building and developers who already are working on projects, but want to upskill with the advanced features of git.
                </p>
                <p>
                  Hi, My name is <span>Mohit Uniyal,</span> I'm a data scientist and a programming instructor. I co-created <span>Coding Minutes</span> to help students & developers like you to build a solid foundation & become great programmers.
                </p>
                <div className="overview-columns">
                  <span>Version Control Systems</span>
                  <span>Command Line Tool</span>
                  <span>Git Introduction</span>
                  <span>Tracking your projects</span>
                  <span>Additional Git commands</span>
                  <span>Non-linear Development: Branching</span>
                  <span>Non-linear Development: Merging</span>
                  <span>Non-linear Development: Rebasing</span>
                  <span>Introduction to Github</span>
                  <span>Social Coding with Github</span>
                  <span>Miscellaneous Git Tools</span>
                  <span>Rewriting History</span>
                  <span>Project Work : Creating your portfolio website </span>
                </div>
                <br />
                <p>No matter whether you are a student, web developer, mobile developer, data scientist or just a computer programmer. Everyone should have Git & Github in their toolkit. This course the only course you need to master Git & Github. The course covers everything in a practical hands-on manner. You will get a quiz in each section to test your understanding of the topics.</p>
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
