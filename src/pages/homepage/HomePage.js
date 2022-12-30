import React from 'react'

import { NavContainer } from '../../containers'
import { Header, Statistics, ExploreCourses, Blogs, WhyCM, CampusCaptains, Discord, MeetTeam, Testimonials, FAQs, Footer } from '../../components'

const HomePage = () => {
  return (
    <div>
      <NavContainer />
      <Header />
      <Statistics />
      <ExploreCourses />
      <Blogs />
      <WhyCM />
      <CampusCaptains />
      <Discord />
      <MeetTeam />
      <Testimonials />
      <FAQs />
      <Footer />
    </div>
  )
}

export default HomePage