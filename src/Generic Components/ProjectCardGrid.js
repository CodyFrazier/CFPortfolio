import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.js';

const ProjectCardGrid = ({ array }) => {
    console.log(array)
    return (
        <div className = 'gridMatrix300 bottomMargin1 leftMargin1 rightMargin1 gridGap1'>{
            array.map((element, idx) => {
                return(
                    <ProjectCard key = { `project${ idx }` } element = { element } idx = { idx } />
                )
            })
        }</div>
    )
}

console.log(ProjectCardGrid);

export default ProjectCardGrid;