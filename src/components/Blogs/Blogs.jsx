import React from "react";
import "./Blogs.css";
import hashnode from "../../assets/Images/main/Hashnode.png";
const Blogs = () => {
  return (
    <div className="components-outer-container" id="blogss">
      <div className="blogs-outer-container" data-aos="fade-up" >
        <div className="blogs-inner-container">
          <div className="blogs-left">
            <h1>Introducing Coding Minutes Blogs!</h1>
            <p>
              Get a comprehensive guide of DSA concepts with programs, Web Development, Interview Tips and Tricks and progamming roadmaps.
            </p>
            <div className="blog-explore">
              <a href="https://blog.codingminutes.com/">Explore Blogs</a>
            </div>

          </div>
          <div className="blogs-right">
            <div className="right-image1">
              <img loading="lazy" style={{ width: '450px', height: '415px' }} src={hashnode} alt="" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
