import { useState, useEffect } from 'react';
import userSignupValidator from '../../validator/index.js';

const useForm = (callback, userSignupValidator) => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({...values, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(userSignupValidator(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        }, [errors]
    );

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};
export default useForm;