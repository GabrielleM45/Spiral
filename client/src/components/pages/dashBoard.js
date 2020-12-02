import React from 'react';
import '../assets/css/App.css';
import Cards from '../CardItems/Cards';



 function dashBoard () {
    return(
    <>
        <h1 className='dashboard'>DashBoard</h1>

    <Cards />

    </>
);
}

export default dashBoard;