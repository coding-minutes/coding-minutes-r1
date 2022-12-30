import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './exploreCourses.css'
import { courseData } from '../../data/courseData'

const ExploreCourses = () => {

  const [courses, setCourses] = useState(courseData);
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const categories = courseData.map((course) => course.title)
  const uniqueCategories = ["All Courses", ...new Set(categories)]

  const filterProjectHandler = (title) => {
    if (title === "All Courses") {
      setCourses(courseData)
      return;
    }
    const newCourses = courseData.filter((course) => course.title === title)
    setCourses(newCourses)
  }

  const changeCoursesHandler = (activeCategory) => {
    setActiveCategory(activeCategory);
    filterProjectHandler(activeCategory);
  }



  return (
    <div className="explore-path-outer-container">
      <div className="components-outer-container">
        <div className='explore-courses-container' id="courses">
          <div className="top" data-aos="fade-up">
            <div className="first" >
              <h1>Explore Learning Paths 🔥</h1>
              <p className="subtitle">Begin the journey for your dream job with these industry vetted learning paths.</p>
            </div>
            <div className="second">
              <div className="categories">
                {uniqueCategories.map((category, index) => (
                  <button
                    key={index}
                    className={` category-btn ${activeCategory === category ? "cm-gradient selected-btn" : "category-bg"}`}
                    onClick={() => changeCoursesHandler(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="bottom">
            {
              courses.map((courseGroup) => {
                return (
                  <div className="course-container">
                    <h2>{courseGroup.title}</h2>
                    <div className="course-internal-container">
                      {courseGroup.courses.map((course, index) => {
                        const { courseImage, difficultyLevel, title, mentors, starRating, isAvailable, slug, color } = course;
                        return (
                          <div className="course" key={index}  data-aos="zoom-in">
                            <div className="course-image">
                              <img src={courseImage} alt="" />
                            </div>
                            <div className="course-info">
                              <div className="first">
                                <span className={` difficulty ${color}`}>{difficultyLevel.toUpperCase()}</span>
                                <p className="course-title">{title}</p>
                                <p className='course-mentors'>{mentors}</p>
                              </div>
                              <div className="second">
                                <span className="rating">{starRating}</span>
                                {isAvailable ? <button className="cm-gradient course-explore-btn"><Link to={`/courses/${slug}`}>Explore Now</Link></button> : <button className="coming-soon-btn">Coming Soon</button>}
                              </div>

                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreCourses