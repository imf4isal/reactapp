import useInput from "../../hook/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: inputInValid,
    enteredValueHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');
 
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: EmailinputInValid,
    enteredValueHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));
 
  
  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!enteredNameIsValid || !enteredEmailIsValid) return;

    console.log(enteredName, enteredEmail);

    resetName(); 
    resetEmail();
  }
  
  const nameInputClass = inputInValid ? 'form-control invalid' : 'form-control';
  const EmailinputInClass = EmailinputInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
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
