import React, { useState, useEffect } from 'react';
import SkillCard from '../Generic Components/SkillCard.js';

const SkillList = ({ bp, setError }) => {

    const skillArray = [
        {
            name : 'Computer Science Skills',
            skillArr : [ { name : 'Javascript', image : '' }, { name : 'CSS', image : '' }, 
                { name : 'HTML', image : '' }, { name : 'React', image : '' }, { name : 'SQL', image : '' },
                { name : 'PostgreSQL', image : '' }, { name : 'Git', image : '' },
                { name : 'Github', image : '' }, { name : 'Node.js', image : '' },
                { name : 'Express', image : '' }, { name : 'Heroku', image : '' },
                { name : 'Python', image : '' }, { name : 'Java', image : '' }, { name : 'C++', image : '' },
                { name : 'ASM', image : '' } ]
        },
        {
            name: 'Behavioral Therapy Skills',
            skillArr : [ { name : 'Applied Behavioral Analysis (ABA)', site : 'https://www.psychologytoday.com/us/therapy-types/applied-behavior-analysis' },
            { name : 'Nonviolent Crisis Intervention (CPI)', site : 'https://www.crisisprevention.com/Our-Programs/Nonviolent-Crisis-Intervention' },
            { name : 'Direct Support Professional Certification I & II', site : 'https://www.dds.ca.gov/services/dspt/' } ]
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