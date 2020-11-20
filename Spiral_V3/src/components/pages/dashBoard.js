import React from 'react';
import '../assets/css/App.css';
import Cards from '../Cards';



 function dashBoard () {
    return(
    <>
        <h1 className='dashboard'>DashBoard</h1>

    <Cards />

    </>
);
}

export default dashBoard;