import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';
import {  Button, BtnWrapper, WidgetContainer } from './widgetElements'

 const size = {
    width: '100%',
    height: 300,
    }
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'

class AddUri extends Component {
        constructor(props) {
            super(props)
            this.state = {
                uriLink: ''
            }
            this.inputuriLinkRef = React.createRef()
        }


    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(this.inputuriLinkRef.current.value)
        console.log(data)

    }

    handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
}
    handleFocusClick = (e) => {
        e.preventDefault();
        this.inputuriLinkRef.current.focus()
    }
    handleClearClick = (e) => {
        e.preventDefault();
        this.setState({
            uriLink: ''
        })
    }

    // componentDidMount() {
    //     this.inputuriLinkRef.current.focus()
    // leavin in case we want to send to db}

    render() {
        const { uriLink } = this.state
        return(
    <>
            <WidgetContainer>
            {/* <Wrapper> */}
            <SpotifyPlayer
                uri={`${uriLink}`}
                size={ size }
                view={ view }
                theme={ theme }/>
            {/* </Wrapper> */}
            <h1>Music Player</h1>
            {/* <FormWrapper> */}
            <form onSubmit={ this.handleSubmit }>
                <p><input
                ref={ this.inputuriLinkRef }
                type='url'
                placeholder='place URI code here'
                name='uriLink'
                onChange={ this.handleInputChange } /></p>
            <BtnWrapper>
                <p><Button onClick={ this.handlFocusClick }>Add Playlist</Button></p>
                <p><Button onClick={ this.handleClearClick }>Clear Playlist</Button></p>
            </BtnWrapper>
            </form>
            {/* </FormWrapper> */}
        </WidgetContainer>
    </>
        )
}
};

export default AddUri;