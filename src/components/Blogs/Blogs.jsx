import React from "react";
import "./Blogs.css";
import reading from "../../assets/Images/main/brandname.svg";
const Blogs = () => {
  return (
    <div className="components-outer-container" id="blogss">
      <div className="blogs-outer-container" data-aos="fade-up" >
        <div className="blogs-inner-container">
          <div className="blogs-left">
            <h1>Introducing Coding Minutes Blogs!</h1>
            <p>
           Get a comprehensive guide of DSA concepts with programs, Web Development, Interview Tips and Tricks and programming roadmaps.
            </p>
            <div className="blog-explore">
              <a href="https://blog.codingminutes.com/">&nbsp; &nbsp;Explore Blogs in&nbsp;<img src={reading} alt="Explore button" />&nbsp;&nbsp;</a>
            </div> 
            
          </div>
          <div className="blogs-right">
            {/* <div className="right-image">
              <img src={reading} alt="" /> 
             
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
