import React from 'react';
import { useCallback } from "react";

function useFormValidation() {
    const [errors, setErrors] = React.useState({});
    const [values, setValues] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const lengthErrorMessage = "Поле должно быть не менее 2 или не более 30 символов";
    const emptyErrorMessage = "Пожалуйста заполните это поле";

    const handleChange = (event) => {
        const { name, value, validationMessage } = event.target;

        if (name === 'switch')
            setValues({ ...values, [name]: event.target.checked });
        else
            setValues({ ...values, [name]: value });

        setErrors({ ...errors, [name]: validationMessage });

        if (value.length < 2 || value.length > 30 ) {
            setErrors({ ...errors, [name]: lengthErrorMessage });
        } else if (value.length === 0) {
            setErrors({...errors, [name]: emptyErrorMessage });
        }

        setIsValid(event.target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, errors, isValid, handleChange, resetForm };
}

export default useFormValidation;