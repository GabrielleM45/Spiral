import { useState } from 'react';
import '../assets/css/App.css';
import SignUp  from './SignUp/signUp';
import SignIn from './signIn/SignIn'

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
          <SignUp submitForm={submitForm} />) : (<SignIn/>
        )}
      </div>
      </>
    );
};

export default Form;