import React, { useState, useEffect } from 'react';

const EduCard = ({ element, idx }) => {
    console.log(element);
    return (
        <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
            <div className = 'rowNW spaceBetweenRow'>
                <div className = 'columnNW spaceBetweenRow pad1'>
                    <a href = { `${ element.site }` } target = '_blank' ><h3>{ element.schoolName }</h3></a>
                </div>  
            </div>
        </div>
    )
}

export default EduCard;