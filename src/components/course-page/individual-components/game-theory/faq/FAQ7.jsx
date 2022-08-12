import React from "react";
import "./faq7.css";

const FAQ7 = () => {
  return (
    <div className="components-outer-container">
      <div className="faq-outer-container">
        <div className="faq-internal-container">
          <div className="faq-title">Frequently asked questions🤔</div>
          <div className="faq-content">
            <div className="faq-content-group">
              <div className="faq-content-item">
                <h4>How long is the course access?</h4>
                <p>
                  The course videos and practice problems come with a lifetime
                  access. Access it anytime, anywhere.{" "}
                </p>
              </div>
              <div className="faq-content-item">
                <h4>Will there be any Certificate of completion?</h4>
                <p>
                  Yes, you will get an instructor signed certificate from Udemy
                  after finishing this course.{" "}
                </p>
              </div>
            </div>
            <div className="faq-content-group">
              <div className="faq-content-item">
                <h4>What are the pre-requisites for this course?</h4>
                <p>
                Programming fundamentals.
Basic understanding of data structures.
Familiar with any one programming language.
{" "}
                </p>
              </div>
              <div className="faq-content-item">
                <h4>
                  I have already taken your other courses, should I do this?
                </h4>
                <p>
                  This course is totally re-designed, with interactive lectures,
                  newer problems, and is focused on problem solving. If you want
                  to revisit topics in short time, this course is for you.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ7;
