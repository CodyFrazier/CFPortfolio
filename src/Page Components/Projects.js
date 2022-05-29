import React, { useState, useEffect } from 'react';

const Projects = ({ bp }) => {

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
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Projects</h1>
            </div>
        </div>
    )
}

export default Projects;