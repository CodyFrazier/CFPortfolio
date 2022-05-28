import React, { useState, useEffect } from 'react';

const ContactInfo = () => {

    //This could be part of a database query
    const [info, setInfo] = useState({
        firstName : 'Cody',
        middleName: 'James',
        lastName: 'Frazier',
        cellPhone: '805-286-2434',
        email: 'codyfrazier@mac.com',
    })

    return (
        <div className = 'colorOW columnNW alignCenter margin1'>
            <h1 className = 'padHalf'>{ info.firstName} {info.lastName }</h1>
            <div className = 'borderOW border5 widthundred margin1'>
                <span className = 'rowNW padHalf spaceBetweenRow'>
                    <h3>Phone: </h3>
                    <div>{ info.cellPhone }</div>
                </span>
                <span className = 'rowNW padHalf spaceBetweenRow'>
                    <h3>Email: </h3>
                    <div>{ info.email }</div>
                </span>
            </div>
        </div> 
    )
}

export default ContactInfo;