import React, { useState, useEffect } from 'react';

const Bio = () => {

    /*
    *******************************TO DO********************************
    1. Determine how this page differs from Personal Interests
    2. Determine what info is actually relevant to potential employers
    */
    return (
        <div className = 'colorOW columnNW'>
            <div className = 'margin1 borderAO border5 pad1'>
                <h1 className = 'bottomMargin1'>Cody Frazier Bio</h1>
                <img src = '../assets/img/CFBioPic.png' className = 'widthundred'/>
                <div><em>Cody Frazier</em> is a Hoomuns Being with a pulse, 
                    two eyes, and a pair of hands that can follow 
                    input from his brain. And Someday he may write a serious
                    bio for this page. For now this a placeholder. ; D
                </div>
            </div>
        </div>
    )
}

export default Bio;