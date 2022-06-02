import React, { useState, useEffect } from 'react';
import SkillCard from '../Generic Components/SkillCard.js';

const SkillList = ({ bp, setError }) => {

    const skillArray = [
        {
            name : 'Computer Science Skills',
            skillArr : [ 'Javascript', 'CSS', 'HTML', 'React', 'SQL', 'PostgreSQL',
                'Git', 'Github', 'Node.js', 'Express', 'Heroku', 'Python',
                'Java', 'C++', 'ASM' ]
        },
        {
            name: 'Behavioral Therapy Skills',
            skillArr : [ 'Applied Behavioral Analysis (ABA)', 
                'Nonviolent Crisis Intervention (CPI)',
                'Direct Support Professional Certification I & II' ]
        }
    ]
    return (
        <div className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Technical Skills</h1>
            </div>
            <SkillCard array = { skillArray } />
        </div>
    )
}

export default SkillList;