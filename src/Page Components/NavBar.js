import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ bp }) => {

    /*
    ********************************TO DO*************************************
    1. Make NavBar Items an Overlay when !bp.isLarge
    2. Consider image icons for use instead of verbose menu options ( Some may be too difficult )
    **************************************************************************
    */
    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        console.log('BreakPoint:');
        console.log(bp);
    }, [])

    return (
        <div>
            { bp.isLarge === false && <input type = 'button' className = 'topPadHalf bottomPadQuarter widthundred bgAO noBorder colorOW' onClick = { () => { setDisplayNav(!displayNav) } } value = 'Menu' /> }
            { (bp.isLarge === true || displayNav === true) && <div className = { `${ bp.isLarge ? 'rowNW spaceAroundRow' : 'columnNW' } widthundred bgAO` }>
                <Link to = '/'>Home</Link>
                <Link to = '/projects/'>Projects</Link>
                <Link to = '/contact/'>Contact Information</Link>
                <Link to = '/workhistory/'>Work History</Link>
                <Link to = '/bio/'>Bio</Link>
                <Link to = '/interests/'>Personal Interests</Link>
            </div> }
        </div>
    )
}

export default NavBar;