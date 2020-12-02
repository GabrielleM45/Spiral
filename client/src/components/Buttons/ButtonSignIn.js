import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-outline', 'btn-form'];
const SIZES = ['btn-medium', 'btn-large'];

export const ButtonSignIn = ({ children, type, onClick, buttonStyle, buttonSize }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/signIn' className='btn-mobile'>
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
        </Link>
    )
    };

    export default ButtonSignIn;