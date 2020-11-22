import { useState } from 'react';
import '../assets/css/App.css'
import SignUpForm  from './SignUpForm';
import LogInForm from './LogInForm'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className='form-container'>
            <span className="close-btn">X</span>
            {!isSubmitted ? (
          <SignUpForm submitForm={submitForm} />) : (<LogInForm/>
        )}
      </div>
      </>
    );
};

export default Form;