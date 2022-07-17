import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const inputInValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes("@");
  const EmailinputInValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if(!enteredNameIsValid || !enteredEmailIsValid) return;

    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }
  
  const nameInputClass = inputInValid ? 'form-control invalid' : 'form-control';
  const EmailinputInClass = EmailinputInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
        {inputInValid && <p className="error-text">Input is not valid.</p>}
      </div>
      <div className={EmailinputInClass}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {EmailinputInValid && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
