import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Bio = ({ bp, setError }) => {

    /*
    *******************************TO DO********************************
    1. Determine how this page differs from Personal Interests
    2. Determine what info is actually relevant to potential employers
    */
    return (
        <div className = 'colorOW columnNW'>
            
            <div className = {`${ bp.isLarge? '' : 'topMargin3' } margin1 borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' } bottomMargin1` }>Cody Frazier Bio</h1>
                <div className = { `${ bp.isLarge ? 'rowNW' : '' }` }>
                    <img src = '../assets/img/personalinterests/CFBioPic.png' className = 'widthundred maxWidth4' />
                    <div className = { `${ bp.isLarge ? 'leftPad1' : '' }` }><em>Cody Frazier</em> is a Hoomuns Being with a pulse, 
                        two eyes, and a pair of hands that can follow 
                        input from his brain. And Someday he may write a serious
                        bio for this page. For now this a placeholder. ; D
                    </div>
                </div>
                
            </div>
            <div className = 'leftMargin1 bottomMargin1 rightMargin1 borderAO border5 pad1'>
                <Link to = '/interests/' className = { `${ bp.isLarge ? '' : '' } undecorated` }>Personal Interests</Link>  
            </div>
            
        </div>
    )
}

export default Bio;