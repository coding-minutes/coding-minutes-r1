import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import AOS from "aos";
// import "aos/dist/aos.css";

import { HomePage, CoursePage, JoinCampusCaptain, SignUp, PageNotFound, DiscordPage } from './pages';

const App = () => {

  // useEffect(() => {
  //   AOS.init({ startEvent: 'load' });
  //   AOS.refreshHard();
  // }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:courseName" element={<CoursePage />} />
        <Route path="/join-campus-captain" element={<JoinCampusCaptain />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discord" element={<DiscordPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </main>
  )
}

export default App