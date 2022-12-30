import React from 'react'

import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'

const Testimonials = () => {
  return (
    <div className="testimonials-outer-container">
      <div className="components-outer-container Carousel-cover">
        <div className="testimonials-container">
          <div className="top">
            <h1 data-aos="fade-up">Our Testimonials 📋</h1>
            <p className='carousel-subhead' data-aos="fade-up">Our courses are loved by students worldwide!! 🌏</p>
          </div>
          <div className="bottom slider" data-aos="fade-up">
            <div className="slider-track">
              {testimonialsData.map((item) => {
                const { id, starRating, comment, userImage, name, country } = item
                return (
                  <div className="card" key={id}>
                    <p className="star-ratings">{starRating}</p>
                    <p className="card-content">{comment}</p>
                    <div className="personal-name">
                      <div>
                        <img src={userImage} alt="" />
                      </div>
                      <div className="inner-personal">
                        <h2>{name}</h2>
                        <h2>{country}</h2>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonials