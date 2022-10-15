import React from 'react'
import { useEffect } from 'react';
import Home from './components/Home'
import CampusCaptainForm from './components/campus-captains-form/CampusCaptainForm'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Discord from './components/discord/Discord'
import CoursePage from './components/course-page/CoursePage'
import { CodingEssentials, CompCoding, ComputerVision, CppEssentials, DeepLearning, DSAEssentials, DSALevelUp, DynamicProgramming, GameTheory, Git, GraphAlgorithm, MachineLearning, NaturalLanguage, PythonDataScience, PythonMasterCourse } from './components/course-page/individual-components/index'
import SignupHome from './components/signup/SignupHome'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

    useEffect(() => {
        AOS.init({ startEvent: 'load' });
        AOS.refreshHard();
    }, []);

    return (
        <>
            <Router>
                
                <Route exact path="/"> <Home /> </Route>
                <Route exact path="/campus-captains"><CampusCaptainForm /></Route>
                <Route exact path="/discord"> <Discord /> </Route>
                <Route exact path="/explore-courses"><CoursePage /></Route>
                <Route exact path="/coding-essentials"><CodingEssentials /></Route>
                <Route exact path="/competitive-programming"><CompCoding /></Route>
                <Route exact path="/computer-vision-specialisation"><ComputerVision /></Route>
                <Route exact path="/cpp-essentials"><CppEssentials /></Route>
                <Route exact path="/deep-learning"><DeepLearning /></Route>
                <Route exact path="/dsa-essentials"><DSAEssentials /></Route>
                <Route exact path="/dsa-levelup"><DSALevelUp /></Route>
                <Route exact path="/dynamic-programming"><DynamicProgramming /></Route>
                <Route exact path="/game-theory"><GameTheory /></Route>
                <Route exact path="/git-and-github"><Git /></Route>
                <Route exact path="/graph-algorithms"><GraphAlgorithm /></Route>
                <Route exact path="/machine-learning"><MachineLearning /></Route>
                <Route exact path="/natural-language"><NaturalLanguage /></Route>
                <Route exact path="/python-data-science"><PythonDataScience /></Route>
                <Route exact path="/python-master-course"><PythonMasterCourse /></Route>
                <Route exact path="/signup"><SignupHome /></Route>

            </Router>
        </>
    )
}

export default App