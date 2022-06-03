import React, { useState, useEffect } from 'react';

const InterestCard = ({ element, idx, bp }) => {
    return (
        <div key = { `card${ idx }` } className = 'columnNW colorOW'>
            <div className = {`widthundred rowNW${ idx % 2 == 0 ? 'justifyStart' : 'justifyEnd' }`}><h2>{ element.interest }</h2></div>
            
            <div className = { `${ bp.isLarge ? '' : '' }` }>
                 <img src = { element.image } className = { `maxWidth2 ${ idx % 2 == 0 ? 'floatRight leftPadHalf' : 'floatLeft rightPadHalf' } topPad1` } />

                 <div className = 'bottomPad1 topPad1'>{ element.blurb }</div>
                 
            </div>
            
        </div>
    )
}

export default InterestCard;