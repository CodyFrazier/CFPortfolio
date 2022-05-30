import React, { useState, useEffect } from 'react';
import ProjectHistoryCardGrid from '../Generic Components/ProjectHistoryCardGrid.js';

const Projects = ({ bp }) => {

    /*
    ************************************TO DO**********************************
    Display projects in a grid that shows the favicon and the name of the project
    at larger screen sizes show a short blurb description of the project
    Maybe have a display filter that allows people to see as a list instead
    ***************************************************************************
    */

    const projectArray = [
        {
            projectName: 'E-Vocation',
            projectFavicon: '../assets/img/projects/e-vocation/E-Vocation-Mobile.png',
            projectGitHub: 'https://github.com/CodyFrazier/e-vocationARCHIVE',
            projectURL: 'https://github.com/CodyFrazier/e-vocationARCHIVE',
            projectGoal: 'E-Vocation was a mockup website built as a capstone project for the Fullstack Academy Bootcamp. It was a posting and bidding site similar to craigslist, but was meant to be used for odd jobs. As a group of four, we completed the project over the course of four weeks.'
        },
        {
            projectName: 'Nomad Reader',
            projectFavicon: '../assets/img/projects/Nomad Bookreader/NomadReaderIcon128.png',
            projectGitHub: 'https://github.com/CodyFrazier/bookreader',
            projectURL: 'https://github.com/CodyFrazier/bookreader',
            projectGoal: 'Nomad Reader is my attempt at making a mobile reading app that also allows people to legitimately publish their own work, even going as far as obtaining an ISBN if possible. The project is still under heavy development.'
        }
    ];

    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Projects</h1>
            </div>
            <ProjectHistoryCardGrid array = { projectArray } />
        </div>
    )
}

export default Projects;