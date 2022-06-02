import React, { useState, useEffect } from 'react';

const Help = ({ bp, setError }) => {

    return (
        <div className = 'topMargin3'>
            <div className = 'topBorderAO bottomBorderAO colorOW topMargin1 bottomMargin1 padHalf rowNW spaceAroundRow'>
                This Will Be A Help Page
            </div>
            <div className = 'margin1 colorOW'>
                There is no help for you right now, but someday this page will be a great Help page.
            </div>
        </div>
    )
}

export default Help;