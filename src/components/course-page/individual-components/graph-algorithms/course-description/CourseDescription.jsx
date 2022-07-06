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
                  <span>Graph Basics, Applications</span>
                  <span>BFS, DFS, Connected Components</span>
                  <span>Shortest Paths - Dijkstra, Bellman, Floyd Warshall</span>
                  <span>Travelling Salesman Problem - DP with Bitmasks</span>
                  <span>Topological Ordering, Strongly Connected Components</span>
                  <span>Disjoint Set Union, Minimum Spanning Trees, Prim's & Kruskal</span>
                  <span>Advanced Graphs, Euler Tour, Trees</span>
                  <span>Network Flow, LCA, Articulation Points</span>
                  <span>Graphs for Competitive Programming</span>
                  <span>80 + Competitive Coding Questions</span>
                  <span>Complete Code Repository in C++ and Java</span>
                  <span>Coding Exercises Solutions</span>
                </div>
              </div>
              <div className="course-overview">
               
                <h2>Course Overview</h2>
                <br />
                <p>
                Welcome to Graph Algorithms for Competitive Coding - the most detailed <span>Specialisation in Graph Theory</span> for Competitive Programmers, Software Engineers & Computer Science students!
                </p>
                <p>
                Graphs is quite an <span>important topic</span> for software engineers, both for academics & online competitions and for solving real life challenges. Graph algorithms form the very fundamentals of many popular applications like - Google Maps, social media apps like Facebook, Instagram, Quora, LinkedIn, Computer Vision applications such as image segmentation, resolving dependencies while compile time, vehicle routing problems in supply chain and many more. This course provides a detailed overview of Graph Theory algorithms in computer science, along with <span>hands on implementation</span> of all the algorithms in <span>C++</span>. Not just that you will get 80+ competitive coding questions, to practice & test your skills! 
                </p>
                <p>
                This comprehensive course is taught by <span>Prateek Narang & Apaar Kamal,</span> who are <span>Software Engineers at Google</span> and have taught over <span>thousands of students</span> in competitive programming over <span>last 5+ years.</span> This course is worth thousands of dollars, but <span>Coding Minutes</span> is providing you this course to you at a <span>fraction of its original cost!</span> This is action oriented course, we not just delve into theory but focus on the practical aspects by building implementing algorithms & solving problems. With over <span>95+ high quality video lectures, easy to understand explanations</span> this is one of the most detailed and robust course for Graph Algorithms ever created.
                </p>
                <p>           
Course starts very basics with how to store and represent graphs on a computer, and then dives into popular algorithms & techniques for problem solving. The course is divided into two parts.
                </p>
                <div className="overview-columns">
                  <span>Graph Representations</span>
                  <span>Popular Traversals - BFS & DFS</span>
                  <span>Cycle Detection - Weighted & Unweighted Graphs</span>
                  <span>Topological Ordering & Directed Acyclic Graphs</span>
                  <span>Disjoint Set Union, Path Compression & Union by Rank</span>
                  <span>Minimum Spanning Trees - Prim's & Kruskal's</span>
                  <span>Shortest Paths - BFS, Dijkstra's, Bellman Ford, Floyd Warshall</span>
                  <span>Travelling Salesman Problem, Min Cost Hamiltonian Cycle</span>
                  <span>Flood Fill</span>
                  <span>Multisource BFS</span>
                  <span>DFS & Backedges</span>
                  <span>SCC's & Kosaraju's Algorithm</span>
                  <span>Euler Tour</span>
                  <span>LCA</span>
                  <span>Trees</span>
                  <span>Articulation Points & Bridges</span>
                  <span>Network Flow</span>
                </div>
                <br />
                <p>The part-II is recommended for programmers who want to deep dive into Competitive Programming & take part in contests. For most students part-I is good enough to understand the most fundamental concepts and techniques in graphs!</p>
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
                <img src={apaarBhaiyaImage} alt="" />
                <div className="instructor-info">
                  <p>
                  Apaar is an ace Competitive Programmer and upcoming Google Software Engineer. He is rated 6 stars on Codechef & master on Codeforces, and has worked with companies like Zomato and Samsung. He loves to solve challenging problems and teach students. <br/> He has been to ACM-ICPC and has won many hackathons. In the past 2 years, he has mentored thousands in Competitive Coding. Dynamic Programming & Graphs are his favorite topics.
                  </p>
                  <div className="social-links">
                  <a href="https://www.linkedin.com/in/apaarkamal/" target="_blank"><img src={linkedin} alt="" /></a>
                  <a href="https://www.instagram.com/apaargram/" target="_blank"><img src={instagram} alt="" /></a>
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
