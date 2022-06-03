import React, { useState, useEffect } from 'react';

const EduCard = ({ element, idx }) => {
    const fullAddress = `${ element.location.address } ${ element.location.city }, ${ element.location.stateAbbr }`
    return (
        <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
            <div className = 'columnNW spaceBetweenRow'>
                <a href = { `${ element.site }` } target = '_blank' className = 'bottomBorderOW pad1' ><h3>{ element.schoolName }</h3></a>
                <div className = 'pad1'>
                    <div className = 'bottomPad1'>
                        <div className = 'bottomPadHalf'>Address:</div>
                        <div className = 'colorAO'>{ fullAddress }</div>
                    </div>
                    <div className = 'rowNW bottomPad1 spaceBetweenRow'>
                        <div>Program: </div>
                        <div>{ element.name }</div>
                    </div>
                    <div className = 'rowNW spaceBetweenRow'>
                        <div>Degree Earned: </div>
                        <div className = 'colorAO textAlignRight'>{ element.degree }</div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default EduCard;