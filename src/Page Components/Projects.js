import React, { useState, useEffect } from 'react';
import ProjectCardGrid from '../Generic Components/ProjectCardGrid.js';
const { projects } = require('../ObjectLists');

const Projects = ({ bp, setError }) => {

    /*
    ************************************TO DO**********************************
    Display projects in a grid that shows the favicon and the name of the project
    at larger screen sizes show a short blurb description of the project
    Maybe have a display filter that allows people to see as a list instead
    ***************************************************************************
    */

    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Projects</h1>
            </div>
            <ProjectCardGrid array = { projects.projectArray } />
        </div>
    )
}

export default Projects;