import React, { useState, useEffect } from 'react';
import WorkCard from './WorkCard';
const { workHistory } = require('../ObjectLists');

const WorkHistoryCardGrid = ({ array }) => {
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((element, idx) => {
                return(
                    <WorkCard key = { `hist${ idx }` } element = { element } idx = { idx } />
                )
            })
        }</div>
    )
}

export default WorkHistoryCardGrid;