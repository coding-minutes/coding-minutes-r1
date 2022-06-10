import React from 'react'
import './headerBanner.css'

import headerBannerImage from '../../assets/Images/main/headerBanner.svg'

const HeaderBanner = () => {
    return (
        <div className="components-outer-container">
            <div className="header-banner-container">
            <img src={headerBannerImage} alt="" />
            </div>
        </div>
    )
}

export default HeaderBanner