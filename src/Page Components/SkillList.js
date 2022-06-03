import React, { useState, useEffect } from 'react';
import SkillCard from '../Generic Components/SkillCard.js';
const { skills } = require('../ObjectLists');

const SkillList = ({ bp, setError }) => {

    
    return (
        <div className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Technical Skills</h1>
            </div>
            <SkillCard array = { skills.skillArray } />
        </div>
    )
}

export default SkillList;