import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const nameRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if(enteredName.trim() === ''){
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
    if(enteredName.trim() === ''){
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(enteredName.trim() === ''){
      setIsValid(false);
      return;
    }

    const enteredValue = nameRef.current.value;

    setEnteredName('');
    console.log(enteredName, enteredValue);
  }

  const inputInValid = !isValid && enteredNameTouched;
  const formControlClass = inputInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formControlClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={enteredNameHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
      </div>
      {inputInValid && <p className="error-text">Input is not valid.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
