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
import Carousel from './carousel/Carousel'
import Advertisement from './advertisement/Advertisement'
import HeaderBanner from './header-banner/HeaderBanner'
import Popup from './popup/Popup'
const Home = () => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      setTimeout(() => {
        setShow(true);
      }, 400);
    }, []);
    React.useEffect(() => {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [show]);
    return (
        <>
            {/* <Advertisement /> */}
            <HeaderBanner/>
            <Navbar />
            <Popup  show={show} Close={() => {setShow(false)}}/>
            <Header />
            <Statistics />
            <LearningPath />
            <Blogs />
            <WhyCM />
            <CampusCaptains />
            <DiscordDashboard />
            <Team />
            {/* <Newsletter /> */}
            <Carousel/>
            <FAQ />
            <Footer />
        </>
        
    )
}

export default Home