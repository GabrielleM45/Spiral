
import SpotifyPlayer from 'react-spotify-player';

//This player may be able to be used for other sources. it is much like the iframe embed'*//

function SpotWidget()
{
    const size = {
    width: '15%',
    height: 300,
    };

    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (

<SpotifyPlayer
    uri="spotify:playlist:19mwmuvR5q6jYUOyT3V3qo"
    size={ size }
    view={ view }
    theme={ theme }
/>

    );
};


export default SpotWidget;
