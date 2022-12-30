import React from 'react'

import './whyCM.css'
import { SiUdemy } from 'react-icons/si'
import { whyCMData } from '../../data/whyCMData'

const WhyCM = () => {
  return (
    <div className="whycm-outer-container">
      <div className="components-outer-container">
        <div className="whycm-container">
          <div className="top" data-aos="fade-up">
            <h1><SiUdemy />Udemy + Coding Minutes Advantage</h1>
            <p>Now spend less than a Pizza 🍕, Learn more than ever 💡</p>
          </div>
          <div className="bottom">
            {whyCMData.map((item) => {
              const { id, title, image } = item
              return (
                <div className="card" key={id} data-aos="fade-up">
                  <img src={image} alt
                    ={title} />
                  <span>{title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyCM