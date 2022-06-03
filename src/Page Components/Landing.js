import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = ({ bp, setError }) => {

    /*
    **********************************TO DO******************************************
    1. Determine what aspects of the Portfolio should be displayed as part of the Landing
    despite also being from other sections
    2. Create a short blurb describing Technical expertise and skills ( soft, hard )
    3. Describe development process ?
    4. Should Education be listed here or in a separate tab?
    *********************************************************************************
    */
    return(
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Online Portfolio</h1>
                <h3 className = { `${ bp.isLarge ? '' : 'rowNW justifyCenter' } widthundred` }>Cody Frazier • Web Developer</h3>
            </div>
            <div className = { `rightMargin1 leftMargin1 bottomMargin1 borderAO border5 pad1` }>
                <Link to = '/skills/' className = 'undecorated'>Cody Frazier's Technical Skills</Link>
            </div>
        </div>
    )
}

export default Landing;