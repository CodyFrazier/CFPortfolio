import React, { useState, useEffect } from 'react';

const WorkHistoryCardGrid = ({ array }) => {
    return (
        <div className = 'gridMatrix bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((element, idx) => {
                return(
                    <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
                        <h3 className = 'pad1'>{ element.employer }</h3>
                        <div className = 'leftPad1'>{ element.nickname }</div>
                        <div className = 'columnNW margin1'>
                            <div className = 'rowNW spaceBetweenRow'>
                                <span>From:</span><span>{ element.startDate }</span>
                            </div>
                            <div className = 'rowNW spaceBetweenRow'>
                                <span>Til:</span><span>{ element.endDate }</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }</div>
    )
}

export default WorkHistoryCardGrid;