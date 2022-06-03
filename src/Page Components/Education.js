import React, { useState, useEffect } from 'react';
import EduCardGrid from '../Generic Components/EduCardGrid.js';
const { education } = require('../ObjectLists');

const Education = ({ bp, setError }) => {
    console.log('Education: ');
    console.log(education)
    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Education</h1>
            </div>
            <EduCardGrid array = { education.educationArray } />
        </div>
    )
}

export default Education;