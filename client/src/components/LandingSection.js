import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/App.css';
import { Button } from './button';
import '../components/assets/css/HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container'>
        <h1>CREATE SOMETHING WONDERFUL</h1>
        <p>SPIRL in</p>
        <div className='hero-btns'>
        <Link to='/SignUpForm'>
        <Button
            className='btn-signUp'
            buttonStyle='btn-outline'
            buttonSize='btn-large'
            >
            Sign Up
        </Button>
</Link>
    </div>
</div>
    );
}

export default HeroSection;