import React, {useEffect} from 'react'

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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  // const [show, setShow] = React.useState(false);
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setShow(true);
  //   }, 400);
  // }, []);
  // React.useEffect(() => {
  //   if (show) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [show]);
  return (
    <>
      {/* <Advertisement /> */}
      {/* <HeaderBanner /> */}
      <Navbar />
      <Header />
      {/* <Popup show={show} Close={() => { setShow(false) }} /> */}
      <Statistics />
      <LearningPath />
      <Blogs />
      <WhyCM />
      <CampusCaptains />
      <DiscordDashboard />
      <Team />
      <Carousel />
      <FAQ />
      <Footer />
    </>

  )
}

export default Home