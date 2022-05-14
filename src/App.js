import React, {useState, useEffect} from 'react'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Statistics from './components/statistics/Statistics'
import LearningPath from './components/learning-paths/LearningPaths'
import Reviews from './components/reviews/Reviews'
import WhyCM from './components/why-cm/WhyCM'
import CampusCaptains from './components/campus-captains/CampusCaptains'
import Team from './components/team/Team'
import FAQ from './components/faq/FAQ'
import Footer from './components/footer/Footer'

import Popup from './components/popup/Popup'
import Home from './components/Home'
import CampusCaptainForm from './components/campus-captains-form/CampusCaptainForm'
import { BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Discord from './components/discord/Discord'


const App = () => {

    const [openModal, setOpenModal] = useState(false);

    useEffect(() =>{
        setTimeout(() =>{
            setOpenModal(true);
        }, 5000);
    }, [])

    return (
        <>
        <Router>
           <Route exact path="/"> <Home/></Route>
           <Route exact path="/campus-captains"><CampusCaptainForm/></Route>
           <Route exact path="/discord"> <Discord/> </Route>

        </Router>
        </>
    )
}

export default App