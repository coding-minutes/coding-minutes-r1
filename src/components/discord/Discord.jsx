import React from 'react'

import './discord.css'
import { discordLogo } from '../../assets'

const Discord = () => {
  return (
    <div className="discord-outer-container">
      <div className="components-outer-container">
        <div className="discord-container" data-aos="fade-up" >
          <div className="left">
            <h1>Join Our Discord Server!</h1>
            <p>Be a part of the fastest growing Coding Community, with over 15000 members. CODE, JAM, PLAY with your peers and win SWAGS, Cash Rewards and Free Courses.
            </p>
            <button> <a href="https://discord.gg/jwvtDtnkJv" target="_blank">Join Server</a></button>
          </div>
          <div className="right">
            <img src={discordLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discord