import React, { useState, useEffect } from 'react';
import PersonalInterestCardGrid from '../Generic Components/PersonalInterestCardGrid';
const { interests } = require('../ObjectLists');

const PersonalInterests = ({ bp, setError }) => {
    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Personal Interests</h1>
            </div>
            <PersonalInterestCardGrid bp = { bp } array = { interests.personalInterestArray }/>
        </div>
    )
}

export default PersonalInterests;