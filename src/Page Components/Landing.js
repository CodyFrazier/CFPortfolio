import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkCard from '../Generic Components/WorkCard.js';
import ProjectCard from '../Generic Components/ProjectCard.js';
import InterestCard from '../Generic Components/InterestCard.js';
const { workHistory, projects, interests } = require('../ObjectLists');

const Landing = ({ bp, setError }) => {

    /*
    **********************************TO DO******************************************
    1. Determine what aspects of the Portfolio should be displayed as part of the Landing
    despite also being from other sections
    2. Create a short blurb describing Technical expertise and skills ( soft, hard )
    3. Describe development process ?
  x 4. ------->Should Education be listed here or in a separate tab? SEPARATE. 
    *********************************************************************************
    */
   const randomFeature = arr => {
       return (Math.floor(Math.random() * arr.length));
   }

    return(
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Online Portfolio</h1>
                <h3 className = { `${ bp.isLarge ? '' : 'rowNW justifyCenter' } widthundred` }>Cody Frazier • Web Developer</h3>
            </div>
            <div className = { `rightMargin1 leftMargin1 bottomMargin1 borderAO border5 pad1` }>
                <Link to = '/skills/' className = 'undecorated'>Cody Frazier's Technical Skills</Link>
            </div>
            <div className = { `rightMargin1 leftMargin1 bottomMargin1 borderAO border5 columnNW` }>
                <h4 className = 'bottomBorderOW pad1'>Featured Items</h4>
                <div className = 'margin1 scrollable'>
                    <div className = 'padHalf'>
                        <h3 className = 'padHalf columnNW colorAO borderOW border5 bottomMargin1'>Web Dev Project</h3>
                        <ProjectCard element = { projects.projectArray[randomFeature(projects.projectArray)] } idx = { 0 } />
                    </div>
                    <div className = 'padHalf'>
                        <h3 className = 'padHalf columnNW colorAO borderOW border5 bottomMargin1'>Work History</h3>
                        <WorkCard element = { workHistory.workArray[randomFeature(workHistory.workArray)] }  idx = { 0 } />
                    </div>
                                   
                </div>
            </div>
        </div>
    )
}

export default Landing;