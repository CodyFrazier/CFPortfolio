import React from 'react';
import { Link } from 'react-router-dom';
import Help from './Help.js';

const Footer = ({ setError }) => {
    return (
        <footer className = 'spaceAroundRow rowNW widthundred'>
            <div className = 'padHalf'>© 2022 Cody Frazier</div>
            <div className = 'padHalf'>•</div>
            <Link to = '/help/'>
                <div className = 'padHalf'>Help Page</div>
            </Link>
        </footer>
    )
}

export default Footer;