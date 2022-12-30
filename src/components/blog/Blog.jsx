import React from 'react'
import { hashnodeLogo } from '../../assets';
import './blog.css'

const Blog = () => {
  return (
    <div className="blogs-outer-container">
      <div className="components-outer-container">
        <div className="blogs-container" data-aos="fade-up" id="blogs">
          <div className="left">
            <h1>Introducing Coding Minutes Blogs!</h1>
            <p>Get a comprehensive guide of DSA concepts with programs, Web Development, Interview Tips and Tricks and progamming roadmaps.
            </p>
            <button><a href="https://blog.codingminutes.com">Explore Blogs</a></button>
          </div>
          <div className="right">
            <img src={hashnodeLogo} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog