import React from 'react'

import { NavContainer } from '../../containers'
import { Header, Statistics, ExploreCourses, WhyCM, CampusCaptains, Discord, MeetTeam, Testimonials, FAQs, Footer } from '../../components'
import Blogs from '../../components/blogs/Blogs'

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