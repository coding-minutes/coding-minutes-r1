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
import DiscordDashboard from './discord/DiscordDashboard'
import Blogs from './Blogs/Blogs'
// import Advertisement from './advertisement/Advertisement'
import HeaderBanner from './header-banner/HeaderBanner'

const Home = () => {
 
    return (
        <>
            {/* <Advertisement /> */}
            <HeaderBanner/>
            <Navbar />
            <Header />
            <Statistics />
            <LearningPath />
            <Blogs />
            <WhyCM />
            <CampusCaptains />
            <DiscordDashboard />
            <Team />
            <Newsletter />
            <FAQ />
            <Footer />
        </>
    )
}

export default Home