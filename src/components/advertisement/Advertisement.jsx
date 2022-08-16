import React from 'react'
import './advertisement.css'

const Advertisement = () => {
  return (
    // <div className="components-outer-container">
        <div className="advertisement-container">
            <div className="advertisement-internal-container">
               <div className="advertisement">
                   <marquee scrollAmount="5">Celebrating Independence Day! Grab all courses at ₹ 389 using code FREEDOM (till 18 August)</marquee>
               </div>
            </div>
        </div>
    // </div>
  )
}

export default Advertisement