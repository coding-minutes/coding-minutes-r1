import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

import './meetTeam.css'
import { teamData } from '../../data/teamData'

const MeetTeam = () => {
  return (
    <div className="team-outer-container">
      <div className="components-outer-container">
        <div className="team-container" id="mentors">
          <div className="top" data-aos="fade-up">
            <h1>Meet the Team 😎</h1>
          </div>
          <div className="bottom">
            {teamData.map((item) => {
              const { id, image, description1, description2, linkedin, instagram, youtube } = item
              if (id === 3) return (<></>)
              return (
                <div className="team-card" key={id} data-aos="fade-up" >
                  <div className="image-container">
                    <img src={image} alt="team member" />
                  </div>
                  <div className="data-container">
                    <div className="description">
                      <p>{description1}</p>
                      <p>{description2}</p>
                    </div>
                    <div className="social-icons">
                      <a href={linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                      <a href={instagram} target="_blank" rel="noreferrer">
                        <BsInstagram />
                      </a>
                      <a href={youtube} target="_blank" rel="noreferrer">
                        <BsYoutube />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetTeam