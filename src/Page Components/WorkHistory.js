import React, { useState, useEffect } from 'react';

const WorkHistory = ({ bp }) => {
    return (
        <div  className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Work History</h1>
                <div>Current Employer Card</div>
            </div>
            <div>Grid of cards, one for each employer, maybe add filtering based on type of work.</div>
        </div>
    )
}

export default WorkHistory;