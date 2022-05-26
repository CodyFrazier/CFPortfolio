import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Page Components/Landing.js';
import NavBar from './Page Components/NavBar.js';
import Footer from './Page Components/Footer.js';
import Help from './Page Components/Help.js';
import Projects from './Page Components/Projects.js';
import ContactInfo from './Page Components/ContactInfo.js';
import WorkHistory from './Page Components/WorkHistory.js';
import Bio from './Page Components/Bio.js';
import PersonalInterests from './Page Components/PersonalInterests.js';

import axios from 'axios';

console.log('Loading App...');

const App = () => {
    //State

    //UseEffects

    //Methods

    return (
    <div id = 'container'>
        <Router>
            <NavBar />
            
            <main className = 'columnNW bgDG alignCenter'>
                <Routes>
                    <Route path = '/' element = { <Landing /> } />
                    <Route path = '/help/' element = { <Help /> } />
                    <Route path = '/projects/' element = { <Projects /> } />
                    <Route path = '/contact/' element = { <ContactInfo /> } />
                    <Route path = '/workhistory/' element = { <WorkHistory /> } />
                    <Route path = '/bio/' element = { <Bio /> } />
                    <Route path = '/interests/' element = { <PersonalInterests /> } />
                </Routes>
            </main>
            <Footer />
        </Router>
    </div>
    )
};

export default App;