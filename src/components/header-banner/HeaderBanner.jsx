import React from 'react'
import './headerBanner.css'
import freedombanner from '../../assets/Images/main/freedombanner.png'
import freedombannerphone from '../../assets/Images/main/freedombannerphone.png'
import headerBannerImage from '../../assets/Images/main/headerBanner.svg'
import headerBannerPhoneImage from '../../assets/Images/main/headerbannerphone.png'

const HeaderBanner = () => {
    return (
        <div className="components-outer-container">
            <div className="header-banner-container">
            <img className="headerImage" src={freedombanner} alt="" />
            <img className="headerImagePhone" src={freedombannerphone} alt="" />
            </div>
        </div>
    )
}

export default HeaderBanner