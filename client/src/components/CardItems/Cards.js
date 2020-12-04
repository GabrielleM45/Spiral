import React from 'react'
import CardItems from './CardItems';
import './Cards.css';


export function Cards() {
    return (
        <div className='cards'>
            <h1>DashBoard</h1>
            <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_item">
                    <CardItems
                        src='./assets/images/staticSoundCloud.png'
                        text="Add SoundCloud"
                        label="musicWidget"
                        path='/dashBoard'
                    />
                    <CardItems
                        src='.src/components/assets/images/socketscreenshot.png'
                        text="Chat with other Users"
                        label="ChatWidget"
                        path='/dashBoard'
                    />
                    </ul>
                    <ul className="cards_item">
                    <CardItems
                        src='./assets/images/feedlyscreenshot.png'
                        text="Your Blog feed"
                        label="blog feed"
                        path='/dashBoard'
                    />
                    <CardItems
                        src='./assets/images/feedlyscreenshot.png'
                        text="Something Else here?"
                        label="Don't know"
                        path='/dashBoard'
                    />
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Cards;