import React from "react";
import "./team.css";
import prateekBhaiya from "../../assets/Images/main/prateek-bhaiya.png";
import mohitBhaiya from "../../assets/Images/main/mohit-bhaiya.png";
import apaarBhaiya from "../../assets/Images/main/apaar-bhaiya.png";
import youtube from "../../assets/Images/main/youtube.png";
import linkedin from "../../assets/Images/main/linkedin.png";
import instagram from "../../assets/Images/main/instagram.png";

const Team = () => {
  return (
    <div className="components-outer-container">
      <div className="team-outer-container">
        <div className="team-internal-container" id="team">
          <div className="team-title" data-aos="fade-up"><span>Meet the team</span> 😎</div>
          <div className="team-members">
            <div className="team-member-item" id="prateek-bhaiya" data-aos="fade-up" data-aos-offset="100">
              <img src={prateekBhaiya} alt="" />
              <div className="team-content">
                <p>
                Prateek is a popular programming instructor and an ace software engineer, currently working with Scaler and created Coding Minutes. He is known for his amazingly simplified explanations that make everyone fall in love with programming. <br/> He has over 5+ years of teaching experience and has trained over 75,000 students in classroom boot camps & online courses in the past.
                </p>
                <p className="team-socials">
                  <a href="https://www.linkedin.com/in/prateeknarang27/" target="_blank"><img src={linkedin} alt="" /></a>
                  <a href="https://www.instagram.com/prateeknarang27/" target="_blank"><img src={instagram} alt="" /></a>
                  <a href="https://www.youtube.com/c/PrateekNarang27" target="_blank"><img src={youtube} alt="" /></a>
                </p>
              </div>
            </div>
            <div className="team-member-item" id="mohit-bhaiya" data-aos="fade-up" data-aos-offset="200"> 
              <img src={mohitBhaiya} alt="" />
              <div className="team-content">
                <p>
                Mohit is a Data Scientist programming instructor and co-creator at Coding Minutes. He has trained over 10000+ students in Machine Learning, and AI over the last 2 years of his teaching experience. His expertise lies in Python, data science, machine learning and AI, and he has won many competitions. <br/> He has been doing AI-based projects for the last 4 years. He also leads the ML and Data Science Domain of Coding Minutes.
                </p>
                <p className="team-socials">
                  <a href="https://www.linkedin.com/in/mohituniyal/" target="_blank"><img src={linkedin} alt="" /></a>
                  <a href="https://www.instagram.com/mohituniyal2010/" target="_blank"><img src={instagram} alt="" /></a>
                </p>
              </div>
            </div>
            {/* <div className="team-member-item" id="apaar-bhaiya" data-aos="fade-up" data-aos-offset="300">
              <img src={apaarBhaiya} alt="" />
              <div className="team-content">
                <p>
                Apaar is an ace Competitive Programmer and upcoming Google Software Engineer. He is rated 6 stars on Codechef & master on Codeforces, and has worked with companies like Zomato and Samsung. He loves to solve challenging problems and teach students. <br/> He has been to ACM-ICPC and has won many hackathons. In the past 2 years, he has mentored thousands in Competitive Coding. Dynamic Programming & Graphs are his favorite topics.
                </p>
                <p className="team-socials">
                  <a href="https://www.linkedin.com/in/apaarkamal/" target="_blank"><img src={linkedin} alt="" /></a>
                  <a href="https://www.instagram.com/apaargram/" target="_blank"><img src={instagram} alt="" /></a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
