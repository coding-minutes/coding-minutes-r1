import React from 'react'
import './headerBanner.css'

import headerBannerImage from '../../assets/Images/main/headerBanner.svg'
import headerBannerPhoneImage from '../../assets/Images/main/headerBannerPhone.svg'

const HeaderBanner = () => {
    return (
        <div className="components-outer-container">
            <div className="header-banner-container">
            <img className="headerImage" src={headerBannerImage} alt="" />
            <img className="headerImagePhone" src={headerBannerPhoneImage} alt="" />
            </div>
        </div>
    )
}

export default HeaderBanner