import React from 'react'

import Navbar from './navbar/Navbar'
import Header from './header/Header'
import Statistics from './statistics/Statistics'
import LearningPath from './learning-paths/LearningPaths'
import WhyCM from './why-cm/WhyCM'
import CampusCaptains from './campus-captains/CampusCaptains'
import Team from './team/Team'
import Newsletter from './newsletter/Newsletter'
import FAQ from './faq/FAQ'
import Footer from './footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Statistics />
            <LearningPath />
            <WhyCM />
            <CampusCaptains />
            <Team />
            <Newsletter />
            <FAQ />
            <Footer />
        </>
    )
}

export default Home