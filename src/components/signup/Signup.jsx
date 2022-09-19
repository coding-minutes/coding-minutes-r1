import React, { useEffect } from 'react'

import './signup.css'
import campusCaptainImage from "../campus-captains-form/campus-captains.svg";

const Signup = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="signup-background-container">

            <div className="components-outer-container">
                <div className="signup-outer-container">
                    <div className="signup-inner-container">
                        <div className="welcome">
                            <h3>Welcome to</h3>
                            <h2>Coding Minutes Family 🥳</h2>
                            <img loading="lazy" src={campusCaptainImage} alt="" />
                        </div>
                        <iframe width="540" height="850" src="https://706a22f4.sibforms.com/serve/MUIEADJWLAe1M6RMees68Rt9eM-MTRgLyFMTb3fwJlr1uHS62O3ufGma-PLhJobbt1Ric_a0xb6EQnLzwTpwuSGCcpngTmvNcukkm71ydEdiaRQrpFDcW7bOiCLxC_XZevVxpBHU6NiX6ZbE2o71vc6QsW0By2ZL_-PL4KaGeFeIhRP5j0R54kDPKNVFapUoHasOtmBaKE-ClcSq" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup