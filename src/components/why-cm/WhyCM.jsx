import React from "react";
import "./whyCM.css";
import udemyIcon from '../../assets/Images/main/udemy-icon.png'
import moneyBagIcon from "../../assets/Images/main/money-bag.png";
import speechBubbleIcon from "../../assets/Images/main/speech-bubble.png";
import problemSolvingIcon from "../../assets/Images/main/problem-solve.png";
import dartIcon from "../../assets/Images/main/dart.png";
import worldIcon from "../../assets/Images/main/world.png";
import youtubeIcon from "../../assets/Images/main/youtube-icon.png";
import webDesignIcon from "../../assets/Images/main/web-design.png";
import medalIcon from "../../assets/Images/main/medal.png";

const WhyCM = () => {
  return (
    <div className="components-outer-container">
      <div className="why-cm-outer-container">
        <div className="why-cm-internal-container">
          <div className="why-cm-title">
            <h3> <img src={udemyIcon} alt="" /> Udemy + Coding Minutes Advantage</h3>
            <p>Now spend less than a Pizza 🍕, Learn more than ever 💡</p>
          </div>
          <div className="why-cm-reasons">
            <div className="why-cm-reasons-outside-container">
              <div className="why-cm-reasons-inside-container">
                <div className="why-cm-items">
                  <img src={moneyBagIcon} alt="" />
                  <p>Pocket friendly courses</p>
                </div>
                <div className="why-cm-items">
                  <img src={speechBubbleIcon} alt="" />
                  <p>Unlimited doubt support</p>
                </div>
                <div className="why-cm-items">
                  <img src={problemSolvingIcon} alt="" />
                  <p>Intuitive & Detailed Explanations</p>
                </div>

                <div className="why-cm-items">
                  <img src={dartIcon} alt="" />
                  <p>Industry vetted curriculum</p>
                </div>
              {/* </div> */}
              {/* <div className="why-cm-reasons-inside-container"> */}
                <div className="why-cm-items">
                  <img src={worldIcon} alt="" />
                  <p>Lifetime access, anytime anywhere</p>
                </div>
                <div className="why-cm-items">
                  <img src={youtubeIcon} alt="" />
                  <p>HD Videos & Crystal clear audios</p>
                </div>
                <div className="why-cm-items">
                  <img src={webDesignIcon} alt="" />
                  <p>Practice codes, real time feedback</p>
                </div>

                <div className="why-cm-items">
                  <img src={medalIcon} alt="" />
                  <p>Certificate of Completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCM;
