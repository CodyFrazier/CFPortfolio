import React, { useState, useEffect } from 'react';

const PersonalInterestCardGrid = ({ bp, array }) => {

    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
           array.map((interest, idx) => {
               { console.log(`idx % 2 == ${ idx % 2 }`) }
               return (
                   <div key = { `card${ idx }` } className = 'columnNW colorOW'>
                       <div className = {`widthundred rowNW${ idx % 2 == 0 ? 'justifyStart' : 'justifyEnd' }`}><h2>{ interest.interest }</h2></div>
                       
                       <div className = { `${ bp.isLarge ? '' : '' }` }>
                            <img src = { interest.image } className = { `maxWidth2 ${ idx % 2 == 0 ? 'floatRight leftPadHalf' : 'floatLeft rightPadHalf' } topPad1` } />

                            <div className = 'bottomPad1 topPad1'>{ interest.blurb }</div>
                            
                       </div>
                       
                   </div>
               )
           }) 
        }</div>
    )
}

export default PersonalInterestCardGrid;