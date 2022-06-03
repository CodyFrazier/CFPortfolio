import React, { useState, useEffect } from 'react';
import InterestCard from './InterestCard.js';

const PersonalInterestCardGrid = ({ bp, array }) => {

    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((interest, idx) => {
                return(
                    <InterestCard key = { `interest${ idx }` } element = { interest } idx = { idx } bp = { bp } />
                )
            }) 
        }</div>
    )
}

export default PersonalInterestCardGrid;