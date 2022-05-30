import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ bp, setError }) => {

    /*
    ********************************TO DO*************************************
    1. Make NavBar Items an Overlay when !bp.isLarge
    2. Consider image icons for use instead of verbose menu options ( Some may be too difficult )
    **************************************************************************
    */
    const [displayNav, setDisplayNav] = useState(false);

    const menuDisplay = () => {
        setDisplayNav(bp.isLarge ? false : !displayNav);
    }

    useEffect(() => {
        console.log('BreakPoint:');
        console.log(bp);
    }, [])

    return (
        <div className = { `${ bp.isLarge ? '' : 'z1 widthundred' }` }>
            { bp.isLarge === false && <input type = 'button' className = 'padHalf widthundred bgAO noBorder colorOW' onClick = { () => { setDisplayNav(!displayNav) } } value = 'Menu' /> }
            { (bp.isLarge === true || displayNav === true) && <div className = { `${ bp.isLarge ? 'rowNW spaceAroundRow' : 'columnNW' } widthundred bgAO` }>
                <Link to = '/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Home</Link>
                <Link to = '/projects/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Projects</Link>
                <Link to = '/contact/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Contact Information</Link>
                <Link to = '/workhistory/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Work History</Link>
                <Link to = '/bio/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Bio</Link>
                <Link to = '/interests/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'topBorderDG' } padHalf undecorated` }>Personal Interests</Link>
            </div> }
        </div>
    )
}

export default NavBar;