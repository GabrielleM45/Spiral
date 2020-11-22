import React from 'react';
import { userSignupValidator, validationErrors, createPostValidator }from '../../validator/index';
import useForm from './useForm';
import '../assets/css/button.css';
import '../assets/css/App.css'
import { Button } from '../button';

const LogInForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, userSignupValidator);
    return (
        <div className="container">
            <form onSubmit={ handleSubmit } className='form' noValidate>
                <div className='form-group'>
                    <h2>Login</h2>
                    <label for="name-input">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name-input"
                        placeholder="Name"
                        value={ values.name }
                        onChange={ handleChange }
                    />
                    { errors.name && <p>{ errors.name }</p> }

                    <label for="exampleInputPassword1">Password</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="password-input"
                        placeholder="Password"
                        value={ values.password }
                        onChange={ handleChange }
                    />
                    { errors.password && <p>{ errors.password }</p> }

                    <Button classNmae='form-submit' type='submit' buttonStyle='btn-outline'>Log In</Button>
                    <br />
                    <span className='form-input-login'>Haven't signed up yet? <br /> Sign Up <a href='SignUpForm'>here</a>
                    </span>
                </div>
            </form>
        </div>
    );
}


export default LogInForm;