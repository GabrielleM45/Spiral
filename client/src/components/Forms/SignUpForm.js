import React from 'react';
import { userSignupValidator, validationErrors, createPostValidator }from '../../validator/index';
import useForm from './useForm';
import '../assets/css/button.css';
import '../assets/css/App.css'
import { Button } from '../button';

const SignUpForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm (submitForm, userSignupValidator);
return (
    <div className="container">
        <form onSubmit={ handleSubmit } className='form' noValidate>

            <div className='form-group'>
            <h2>Sign Up</h2>
            <label for="form-input">Name</label>
            <input
            className="form-control"
            name="name"
            type="text"
            id="name-input"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}

            <label for="form-input">Email address</label>
            <input
            className="form-control"
            name="email"
            type="email"
            id="email-input"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}

            <label for="form-input">Password</label>
            <input
            className="form-control"
            name="password"
            type="password"
            id="password-input"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}

            <Button classNmae='form-submit' type='submit'buttonStyle='btn-outline'>Sign Up</Button>
            <br />
        <span className='form-input-login'>Already have an account? <br/> Login <a href='/LogInForm'>here</a>
        </span>
        </div>
    </form>
</div>
);
};

export default SignUpForm;