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
            { bp.isLarge === false && <input type = 'button' className = 'padHalf widthundred bgPGRGBA borderAO bottomLeft5 bottomRight5 colorOW frosted' onClick = { () => { setDisplayNav(!displayNav) } } value = { `${ displayNav ? 'Collapse' : 'Menu' }` } /> }
            { (bp.isLarge === true || displayNav === true) && <div className = { `${ bp.isLarge ? 'rowNW spaceAroundRow borderAO bgPGRGBA' : 'columnNW' }` }>
                <Link to = '/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf border20' } menuConstants` }>Home</Link>
                <Link to = '/projects/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf rightMargin1 border20' } menuConstants` }>Projects</Link>
                <Link to = '/contact/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf rightMargin2 border20' } menuConstants` }>Contact Information</Link>
                <Link to = '/education/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf rightMargin4 border20' } menuConstants` }>Education</Link>
                <Link to = '/workhistory/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf rightMargin8 border20' } menuConstants` }>Work History</Link>
                <Link to = '/bio/' onClick = { () => menuDisplay() } className = { `${ bp.isLarge ? '' : 'borderAO marginHalf rightMargin14 border20' } menuConstants` }>Bio</Link>
            </div> }
        </div>
    )
}

export default NavBar;