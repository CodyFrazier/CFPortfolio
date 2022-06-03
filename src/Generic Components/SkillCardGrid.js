import React, { useState, useEffect } from 'react';
import SkillCard from './SkillCard.js';

const SkillCardGrid = ({ array }) => {
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((skill, idx) => {
                return(
                    <SkillCard key = {`skill${idx}`} element = { skill } idx = { idx } />
                )
            })
        }</div>
    )
}

export default SkillCardGrid;