import React, { useState, useEffect } from 'react';

const ErrorBar = ({ error, bp }) => {

    /*
    This Error Bar should appear when the site runs into an unexpected error.
    Naturally the goal is for this never to show up, nonetheless, I shall be prepared

    It will be sleek, unintrusive, but should still draw the eye. 

    Consider the color pallette, and how to make this pop a bit, but I think Red Lines
    surrounding the text is a good place to start.

    Consider what elements NEED to be present, then consider what will help users
    understand what is going on, whether it is their fault, and what they
    may be able to do to resolve the situation.

    This will be included in EVERY Page Component. There may be another error bar for generics,
    or maybe it will also be included in them as well. Either way, this is the most prolific component.

    */
    return (
        <div className = { `${ bp.isLarge ? 'topMargin1' : 'topMargin3' } rowNW colPG bgOW padHalf topBorderAO bottomBorderAO` }>
            <div>Error Code: { error.id }</div>
            <div>- { error.message }</div>
        </div>
    )
}

export default ErrorBar;