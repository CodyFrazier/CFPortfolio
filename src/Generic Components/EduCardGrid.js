import React, { useState, useEffect } from 'react';
import EduCard from './EduCard.js';

const EduCardGrid = ({ array }) => {
    console.log('array: ')
    console.log(array)
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((element, idx) => {
                return (
                    <EduCard key = { `school${ idx }` } element = { element } idx = { idx } />
                )
            })
        }</div>
    )
}

export default EduCardGrid;