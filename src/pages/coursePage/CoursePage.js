import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { NavContainer } from '../../containers'
import { WhyCM, FAQs, Footer } from './../../components'

import './coursePage.css'
import { courseData, couponCode } from '../../data/courseData'
import { industryCurriculum, campusCaptainImage } from '../../assets'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

const CoursePage = () => {

  const [currentCourse, setCurrentCourse] = useState();

  const { courseName } = useParams();

  useEffect(() => {
    const course = courseData.find(({ courses }) => {
      courses.find((course) => {
        if (course.slug === courseName) {
          setCurrentCourse(course.courseDetail);
        }
      })
    });
  }, [courseName])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ratingsTemp = currentCourse?.title === 'Machine Learning Essentials (2023)' ? true : false;

  return (
    <div >
      <NavContainer />
      <div className='coursepage-outer-container'>
        <div className="components-outer-container">
          <div className="coursepage-container">
            <div className="top">
              <div className="left" data-aos="fade-right">
                <div className="left-top">
                  <div className="title-image">
                    <img src={industryCurriculum} alt="" />
                  </div>
                  <h1>{currentCourse?.title}</h1>
                </div>
                <p className="course-descriptionTop">{currentCourse?.descriptionTop}</p>
                <div className="left-bottom">
                  <div className='left-bottom-first'>
                    <div className="price-div">
                      <span className='price-span'>{currentCourse?.priceInfo.current}</span>
                      <span className='price-span2'>{currentCourse?.priceInfo.original}</span>
                    </div>
                    <span className='coupon-code'>Use Code : {couponCode}</span>
                  </div>
                  <div className='left-bottom-second'>
                    <button className="cm-gradient"><a href={currentCourse?.udemyLink} target="_blank">Enroll now on Udemy</a></button>
                    <span>{currentCourse?.starRating}{ratingsTemp ? '' : '/5'}</span>
                  </div>
                </div>
              </div>
              <div className="right" data-aos="fade-left">
                <iframe width="400" height="267" src={currentCourse?.youtubeIntro} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="bottom" >
              <div className="bottom-left">
                <div className="bottom-left-top" data-aos="fade-up">
                  <h2>What you'll learn</h2>
                  <ul>
                    {currentCourse?.learningOutcomes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bottom-left-bottom" data-aos="fade-up">
                  <h2>Course Overview</h2>
                  <div className="first">
                    {currentCourse?.courseDescription.map((item, index) => (
                      <p>{item}</p>
                    ))}
                  </div>
                  <div className="second">
                    <h3>Here is what you will learn : </h3>
                    <ul>
                      {currentCourse?.courseFeatures.map((item, index) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="third">
                    {currentCourse?.courseDescriptionEnd.map((item, index) => (
                      <p>{item}</p>
                    ))}
                  </div>


                </div>

              </div>
              <div className="bottom-right" data-aos="fade-up">
                <h2>Meet the Instructor</h2>
                {currentCourse?.instructor.map((item, index) => (
                  <div className="instructor">
                    <div className="image-container">
                      <img src={item.image} alt="team member" />
                    </div>
                    <div className="data-container">
                      <div className="description">
                        <p>{item.description1}</p>
                        <p>{item.description2}</p>
                      </div>
                      <div className="social-icons">
                        <a href={item.linkedin} target="_blank" rel="noreferrer">
                          <FaLinkedinIn />
                        </a>
                        <a href={item.instagram} target="_blank" rel="noreferrer">
                          <BsInstagram />
                        </a>
                        <a href={item.youtube} target="_blank" rel="noreferrer">
                          <BsYoutube />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyCM />

      <div className="coursepage-second-outer-container">
        <div className="coursepage-second-container" data-aos="fade-up">
          <div className="left">
            <h1>Ready to take your</h1>
            <h1>Coding Skills to Next Level?</h1>
            <p>Join the Course Now!
            </p>
            <button className="cm-gradient"><a href={currentCourse?.udemyLink} target="_blank">Enroll now on Udemy</a></button>
          </div>
          <div className="right">
            <img src={campusCaptainImage} alt="" />
          </div>
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  )
}

export default CoursePage