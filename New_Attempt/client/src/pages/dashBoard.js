import React from 'react';
import '../components/assets/css/App.css';
import Cards from '../components/CardItems/Cards';
import Player from '../components/Music/Spotify_API/player'
// import App from '../components/Music/Spotify_API/Spotifyapp'
// import SignUp from '../components/Forms/SignUp/signUp'



function dashBoard () {
    return(
    <>
        <h1 className='dashboard'>DashBoard</h1>

    <Cards />
    <Player />
    {/* <SignUp /> */}

    </>
);
}

export default dashBoard;