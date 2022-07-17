import { useState } from "react";

const useInput = (validity) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [enteredValueTouched, setEnteredValueTouched] = useState(false);

    const valueIsValid = validity(enteredValue);
    const hasError = !valueIsValid && enteredValueTouched;

    const valueInputBlurHandler = (event) => {
        setEnteredValueTouched(true);
    }

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const reset = () => {
        setEnteredValue('');
        setEnteredValueTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        enteredValueHandler,
        valueInputBlurHandler,
        reset
    }
}

export default useInput;