import React from 'react'
import './buyOnUdemy.css'

import rocketMan from "../../../../../assets/Images/main/rocket-man.png";


const BuyOnUdemy = () => {
  return (
    <div className="components-outer-container">
      <div className="buy-on-udemy-container">
        <div className="buy-on-udemy-internal-container">
          <div className="buy-on-udemy-left">
            <h3>Ready to take your</h3>
            <h3>Coding Skills to Next Level?</h3>
            <p>Join the Course Now!</p>
            <a href="https://www.udemy.com/course/c-plus-plus-programming-beginners/?couponCode=BLACKFRIDAY360" target="_blank">
              Enroll now on Udemy
            </a>
          </div>
          <div className="buy-on-udemy-right">
            <div className="buy-on-udemy-right-image">
              <img loading="lazy" src={rocketMan} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyOnUdemy