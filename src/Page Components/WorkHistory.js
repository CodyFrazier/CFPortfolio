import React, { useState, useEffect } from 'react';
import WorkHistoryCardGrid from '../Generic Components/WorkHistoryCardGrid.js';

const WorkHistory = ({ bp, setError }) => {
    const workArray = [
        {
            employer: 'United Parcel Service',
            nickname: 'UPS',
            startDate: 'September 14 2021',
            endDate: 'March 20 2022',
            position: 'Preloader',
            workDuties: ['Load Boxes onto UPS Trucks', 'Yard Certified Duties']
        },
        {
            employer: 'California Psychcare',
            nickname: 'CPC',
            startDate: 'Aug 2016',
            endDate: 'Mar 2019',
            position: 'Behavioral Therapist',
            workDuties: ['Perform Applied Behavioral Analysis', 'Collect Data about Behaviors and Complete Tasks according to Behavioral Plan']
        },
        {
            employer: 'Creative Alternative for Learning and Living',
            nickname: 'CALL Program',
            startDate: 'Feb 2014',
            endDate: 'Oct 2016',
            position: 'Caregiver',
            workDuties: ['Care for Developmentally Disabled Adults in a Group Home Setting', 'Follow Behavioral Plans for each client to improve their social skills']
        }
    ]
    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Work History</h1>
            </div>
            <WorkHistoryCardGrid array = { workArray } />
        </div>
    )
}

export default WorkHistory;