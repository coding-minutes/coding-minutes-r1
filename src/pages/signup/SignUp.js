import React, { useEffect } from 'react'

import './signup.css'
import { signUpImage } from '../../assets'

const SignUp = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="signup-outer-container">
      <div className="signup-internal-container">
        <div className="left">
          <h3>Welcome To</h3>
          <h2>Coding Minutes Family</h2>
          <img src={signUpImage} alt="" />
        </div>
        <iframe width="500" height="850" src="https://706a22f4.sibforms.com/serve/MUIEADJWLAe1M6RMees68Rt9eM-MTRgLyFMTb3fwJlr1uHS62O3ufGma-PLhJobbt1Ric_a0xb6EQnLzwTpwuSGCcpngTmvNcukkm71ydEdiaRQrpFDcW7bOiCLxC_XZevVxpBHU6NiX6ZbE2o71vc6QsW0By2ZL_-PL4KaGeFeIhRP5j0R54kDPKNVFapUoHasOtmBaKE-ClcSq" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
      </div>
    </div>
  )
}

export default SignUp