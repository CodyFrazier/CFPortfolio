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
    const [breakpoint, setBreakpoint] = useState({isLarge: window.innerWidth > 789 ? true : false, width: window.innerWidth });

    //Methods
    const checkWindowSize = () => {
        /* Window Size Rerender Safety Check: 
        console.log('Resize Event Detected...');
        console.log(`Window Width: ${ window.innerWidth }`)
        */
        //Expand elses as more breakpoints become reasonable to use
        if(breakpoint.width != window.innerWidth){
            if(window.innerWidth > 789){
                setBreakpoint({
                    isLarge: true,
                    width: window.innerWidth
                })
            }else{
                setBreakpoint({
                    isLarge: false,
                    width: window.innerWidth
                })
            }
        }
        
    }

    //UseEffects
    
    useEffect(() => {
        window.addEventListener('resize', checkWindowSize)

        //Since React rerenders components constantly, the useEffect will create a memory leak with this V
        return() => {
            window.removeEventListener('resize', checkWindowSize)
        }
    }, [checkWindowSize])
    

    return (
    <div id = 'container'>
        <Router>
            <NavBar bp = { breakpoint } />
            
            <main className = 'columnNW bgDG alignCenter widthundred'>
                <Routes>
                    <Route path = '/' element = { <Landing bp = { breakpoint } /> } />
                    <Route path = '/help/' element = { <Help bp = { breakpoint } /> } />
                    <Route path = '/projects/' element = { <Projects bp = { breakpoint } /> } />
                    <Route path = '/contact/' element = { <ContactInfo bp = { breakpoint } /> } />
                    <Route path = '/workhistory/' element = { <WorkHistory bp = { breakpoint } /> } />
                    <Route path = '/bio/' element = { <Bio bp = { breakpoint } /> } />
                    <Route path = '/interests/' element = { <PersonalInterests bp = { breakpoint } /> } />
                </Routes>
            </main>
            <Footer />
        </Router>
    </div>
    )
};

export default App;