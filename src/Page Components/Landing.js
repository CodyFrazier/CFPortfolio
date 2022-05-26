import React, { useEffect, useState } from 'react';

const Landing = () => {

    //This landing page is a temporary technical example.
    //operative state to confirm that state changes will rerender the page
    const [count, setCount] = useState(0);

    const changeCount = op => {
        op ? setCount(count + 1) : setCount(count - 1);
    }

    return(
        <div className = 'columnNW alignCenter border5 borderAO margin1'>
            <div className = 'rowNW spaceAroundRow margin1 widthundred'>
                <input type = 'button' className = 'bgPG borderAO colorAO border5' onClick = { () => changeCount(true) } value = 'Add' />
                <input type = 'button' className = 'bgPG borderAO colorAO border5' onClick = { () => changeCount(false) } value = 'Subtract' />
            </div>
            <div className = 'colorAO borderAO padHalf marginHalf border5'>{ count }</div>
        </div>
    )
}

export default Landing;