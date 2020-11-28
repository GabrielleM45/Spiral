import React from 'react';
import signin from '../../../controllers/auth';
// import { userSignupValidator, validationErrors }from '../../validator/index';
import useForm from '../useForm';
import '../../Buttons/button.css';
import '../../assets/css/App.css';
import { ButtonSignIn } from '../../Buttons/ButtonSignIn';

const SignIn = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(submitForm, signin);
    return (
        <div className="container">
            <form onSubmit={ handleSubmit } className='form' noValidate>
                <div className='form-group'>
                    <h2>Sign In</h2>
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

                    <ButtonSignIn classNmae='form-submit' type='submit' buttonStyle='btn-outline'>Log In </ButtonSignIn>
                    <br />
                    <span className='form-input-login'>Haven't signed up yet? <br /> Sign Up <a href='/'>here</a>
                    </span>
                </div>
            </form>
        </div>
    );
}


export default SignIn;