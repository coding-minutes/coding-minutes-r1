import React from 'react'

import Home from './components/Home'
import CampusCaptainForm from './components/campus-captains-form/CampusCaptainForm'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Discord from './components/discord/Discord'


const App = () => {



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