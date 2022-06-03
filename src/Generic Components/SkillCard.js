import React, { useState, useEffect } from 'react';

const SkillCard = ({ element, idx }) => {
    return(
        <div key = { `card${ idx }` } className = 'borderAO border5'>
            <h3 className = 'padHalf bottomBorderOW'>{ element.name }</h3>
            <div className = 'pad1 scrollable maxHeight2'>{
                element.skillArr.map((skill, idx) => {
                    return(
                        <div key = { `skill${ idx }` } className = 'topPadHalf bottomPadHalf rowNW spaceBetweenRow'>
                            { skill.site && <a href = { `${ skill.site }` } target = '_blank'><div>{ skill.name }</div></a> }
                            { !skill.site && <div>{ skill.name }</div> }
                            { skill.image && <div>{ skill.image }</div> }
                        </div>
                    )
                })
            }</div>
        </div>
    )
}

export default SkillCard;