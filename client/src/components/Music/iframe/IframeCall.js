import React, {Component} from 'react';
import Iframe from './iFrame';

class IframeCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: "https://open.spotify.com/embed/playlist/19mwmuvR5q6jYUOyT3V3qo"
//uri code is the last portion of this link
//we can create a form to gather the input and make it specific to spotify PARSE OUT JUST THE END PORTION OF THE URI or when users enter the embed code for their play PARSE OUT THE SRC LINK*//

};
}

    render() {
        return (
            <div className="App">

                <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default IframeCall;