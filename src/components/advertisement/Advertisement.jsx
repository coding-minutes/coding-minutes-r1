import React, { useState, useEffect } from 'react'

import { desktopAdvertisement, mobileAdvertisement } from '../../assets/advertisementImages'
import './advertisement.css'

const Advertisement = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    const { innerWidth: width } = window;
    setWidth(width);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  useEffect(() => {
    if (width <= 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);


  return (
    <div className="components-outer-container" >
      <div className={isMobile ? "advertisement-mobile" : "advertisement-desktop"}>
        <img src={isMobile ? mobileAdvertisement : desktopAdvertisement} alt="" />
      </div>
    </div>
  )
}

export default Advertisement