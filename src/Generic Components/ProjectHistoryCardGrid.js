import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectHistoryCardGrid = ({ array }) => {
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((project, idx) => {
                console.log('Project:');
                console.log(project);
                return (
                    <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
                        <div className = 'rowNW spaceBetweenRow'>
                            <div className = 'columnNW spaceBetweenRow pad1'>
                                <a href = { `${ project.projectURL }` } target = '_blank' ><h3>{ project.projectName }</h3></a>
                                <a href = { `${ project.projectGitHub }` } target = '_blank' className = 'rowNW spaceBetweenRow'><img src = '../assets/img/public/GitHub-Mark-Light-120px-plus.png' className = 'maxWidth1Rem'/><h4>Github</h4></a>
                            </div>
                            <img className = 'maxWidth1 pad1' src = { project.projectFavicon } />    
                        </div>
                        <div className = 'pad1 topBorderOW'>{ project.projectGoal }</div>
                    </div>
                )
            })
        }</div>
    )
}

export default ProjectHistoryCardGrid;