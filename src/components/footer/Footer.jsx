import React from "react";
import "./footer.css";
import codingMinutesLogo from "../../assets/Images/main/codingMinutesLogo.png";
import youtube from "../../assets/Images/main/youtube.png";
import linkedin from "../../assets/Images/main/linkedin.png";
import instagram from "../../assets/Images/main/instagram.png";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="components-outer-container" id="faq">
        <div className="footer-internal-container" id="contact">
          <div className="footer-items about-cm">
            <img src={codingMinutesLogo} alt="" />
            <p className="about-cm-text">
              Coding Minutes was started with a mission to provide affordable &
              high quality education for everyone. With Udemy as our technology
              partner, we wish to bring all our courses with top-notch content
              to our students at pocket friendly prices with lifetime access.
            </p>
            <p className="copyright-info">
              &copy;2022 Coding Minutes. All rights reserved
            </p>
          </div>
          <div className="footer-items footer-nav">
            <ul>
              <li> <a href="#team"> About us</a></li>
              <li> <a href="#courses"> Courses</a></li>
              <li> <a href="#campus-captains"> Campus Captain</a></li>
              <li> <a href="#discord-dashboard"> Discord</a></li>
              <li> <a href="https://ide.codingminutes.com" target="_blank"> Online IDE</a></li>
              <li> <a href="#contact"> Contact us</a></li>
            </ul>
          </div>
          <div className="footer-items footer-contacts">
            <div className="socials">
              <p>Get in Touch</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/company/codingminutes/" target="_blank"><img src={linkedin} alt="" /> </a>
                <a href="https://www.instagram.com/codingminutes/" target="_blank"><img src={instagram} alt="" /> </a>
                <a href="https://www.youtube.com/channel/UC5JLFq7_vMnZbRNisG41hng" target="_blank"><img src={youtube} alt="" /> </a>
              </div>
            </div>
            <div className="contacts">
              <h4>Contact Us</h4>
              <p>+91 8947050005</p>
              <p><a href="mailto:hello@codingminutes.com">hello@codingminutes.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
