import React from "react";
import "./courseDescription.css";
import dartIcon from "../../../../assets/Images/main/dart.png";
import speechBubbleIcon from "../../../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../../../assets/Images/main/problem-solve.png";
import webDesignIcon from "../../../../assets/Images/main/web-design.png";
import prateekBhaiyaImage from "../../../../assets/Images/main/prateek-bhaiya.png";
import mohitBhaiyaImage from "../../../../assets/Images/main/mohit-bhaiya.png";
import youtube from "../../../../assets/Images/main/youtube.png";
import linkedin from "../../../../assets/Images/main/linkedin.png";
import instagram from "../../../../assets/Images/main/instagram.png";

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
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                  <span>Array1</span>
                </div>
              </div>
              <div className="course-overview">
                <h4>Course Overview</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, neque!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto nihil eveniet repellat quis minima autem amet
                  commodi necessitatibus maxime? Officiis!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto nihil eveniet repellat quis minima autem amet
                  commodi necessitatibus maxime? Officiis!
                </p>
                <div className="overview-columns">
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
                  <span>Topic1</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
