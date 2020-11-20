import React from 'react';
import './assets/css/App.css';
import { Button } from './button';
import '../components/assets/css/HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container'>
        <h1>CREATE SOMETHING WONDERFUL</h1>
        <p>SPIRL in</p>
        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
        </Button>
    </div>
</div>
    );
}

export default HeroSection;