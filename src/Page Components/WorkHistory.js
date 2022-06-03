import React, { useState, useEffect } from 'react';
import WorkHistoryCardGrid from '../Generic Components/WorkHistoryCardGrid.js';
const { workHistory } = require('../ObjectLists');

const WorkHistory = ({ bp, setError }) => {
    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Work History</h1>
            </div>
            <WorkHistoryCardGrid array = { workHistory.workArray } />
        </div>
    )
}

export default WorkHistory;