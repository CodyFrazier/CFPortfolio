import React, { useState, useEffect } from 'react';

const ProjectCard = ({ element, idx }) => {
    console.log(element);
    return (
        <div key = { `card${ idx }` } className = 'colorOW columnNW borderAO border5'>
            <div className = 'rowNW spaceBetweenRow'>
                <div className = 'columnNW spaceBetweenRow pad1'>
                    <a href = { `${ element.projectURL }` } target = '_blank' ><h3>{ element.projectName }</h3></a>
                    <a href = { `${ element.projectGitHub }` } target = '_blank' className = 'rowNW spaceBetweenRow'><img src = '../assets/img/public/GitHub-Mark-Light-120px-plus.png' className = 'maxWidth1Rem'/><h4>Github</h4></a>
                </div>
                <img className = 'maxWidth1 pad1' src = { element.projectFavicon } />    
            </div>
            <div className = 'pad1 topBorderOW'>{ element.projectGoal }</div>
        </div>
    )
}

export default ProjectCard;