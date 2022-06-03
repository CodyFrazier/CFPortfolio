import React, { useState, useEffect } from 'react';

const WorkCard = ({ element, idx }) => {
    console.log(element)
    return(
        <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
            <h3 className = 'pad1'>{ element.employer }</h3>
            <div className = 'leftPad1'>{ element.nickname }</div>
            <div className = 'columnNW margin1'>
                <div className = 'rowNW spaceBetweenRow'>
                    <span>From:</span><span>{ element.startDate }</span>
                </div>
                <div className = 'rowNW spaceBetweenRow'>
                    <span>Til:</span><span>{ element.endDate }</span>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;