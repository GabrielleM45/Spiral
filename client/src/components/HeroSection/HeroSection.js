import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/App.css';
import { ButtonSignUp } from '../Buttons/ButtonSignUp';
import './HeroSection.css';

function HeroSection() {
    return (
    <div className='hero-container'>
        <h1>CREATE SOMETHING WONDERFUL</h1>
        <p>SPIRL in</p>
        <div className='hero-btns'>
        <Link to='/SignUpForm'>
        <ButtonSignUp
            className='btn-signUp'
            buttonStyle='btn-outline'
            buttonSize='btn-large'
            >
            Sign Up
        </ButtonSignUp>
</Link>
    </div>
</div>
    );
}

export default HeroSection;