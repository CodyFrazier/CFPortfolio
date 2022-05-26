import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className = 'rowNW bgAO padHalf spaceAroundRow'>
            <Link to = '/'>Home</Link>
            <Link to = '/projects/'>Projects</Link>
            <Link to = '/contact/'>Contact Information</Link>
            <Link to = '/workhistory/'>Work History</Link>
            <Link to = '/bio/'>Bio</Link>
            <Link to = '/interests/'>Personal Interests</Link>
        </div>
    )
}

export default NavBar;