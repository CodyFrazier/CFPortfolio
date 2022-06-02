import React, { useState, useEffect } from 'react';

const SkillCard = ({ array }) => {
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((skillset, idx) => {
                return(
                    <div key = { `card${ idx }` } className = 'borderAO border5'>
                        <h3 className = 'padHalf bottomBorderOW'>{ skillset.name }</h3>
                        <div className = 'pad1 scrollable maxHeight2'>{
                            skillset.skillArr.map((skill, idx) => {
                                return(
                                    <div key = { `skill${ idx }` } className = 'topPadHalf bottomPadHalf'>{ skill }</div>
                                )
                            })
                        }</div>
                    </div>
                )
            })
        }</div>
    )
}

export default SkillCard;