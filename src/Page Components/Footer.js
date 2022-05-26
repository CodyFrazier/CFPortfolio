import React from 'react';
import { Link } from 'react-router-dom';
import Help from './Help.js';

const Footer = () => {
    return (
        <footer className = 'spaceAroundRow rowNW'>
            <div>© 2022 Cody Frazier</div>
            <div>•</div>
            <Link to = '/help/'>
                <div>Help Page</div>
            </Link>
        </footer>
    )
}

export default Footer;