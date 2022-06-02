import React, { useState, useEffect } from 'react';

const ContactInfo = ({ bp, setError }) => {

    //This could be part of a database query
    const [info, setInfo] = useState({
        firstName : 'Cody',
        middleName: 'James',
        lastName: 'Frazier',
        cellPhone: '805-286-2434',
        email: 'codyfrazier@mac.com',
    })

    return (
        <div className = 'colorOW columnNW widthundred'>
            <div className = {`${ bp.isLarge? 'margin1' : 'topMargin3 leftMargin1 rightMargin1 bottomMargin1' } alignCenter borderAO border5 pad1` }>
                <h1 className = { `${ bp.isLarge? '' : 'rowNW justifyCenter' }` }>Contact Information</h1>
            </div>
            <div className = 'leftMargin1 rightMargin1 bottomMargin1 alignCenter borderAO border5 pad1'>
                <h1 className = 'bottomMargin1'>{ info.firstName} {info.lastName }</h1>
                <div className = 'widthundred'>
                    <span className = 'borderOW border5 rowNW spaceBetweenRow padHalf marginHalf'>
                        <h3>Phone: </h3>
                        <div>{ info.cellPhone }</div>
                    </span>
                    <span className = 'borderOW border5 rowNW spaceBetweenRow padHalf marginHalf'>
                        <h3>Email: </h3>
                        <div>{ info.email }</div>
                    </span>
                </div>
            </div> 
        </div>
    )
}

export default ContactInfo;