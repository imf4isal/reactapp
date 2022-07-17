import useInput from "../../hook/use-input";


const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInValid,
    enteredValueHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: entereLastNameIsValid,
    hasError: lastNameInValid,
    enteredValueHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: entereEmailIsValid,
    hasError: emailInValid,
    enteredValueHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));


  let formIsValid = false;
  if(enteredFirstNameIsValid && entereLastNameIsValid && entereEmailIsValid) formIsValid = true;

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!enteredFirstNameIsValid || !entereLastNameIsValid || !entereEmailIsValid) return;

    console.log(enteredFirstName,enteredLastName, enteredEmail);

    resetFirstName(); 
    resetLastName();
    resetEmail();
  }
  
  const firstNameInputClass = firstNameInValid ? 'form-control invalid' : 'form-control';
  const LastNameInputClass = lastNameInValid ? 'form-control invalid' : 'form-control';
  const emailInputInClass = emailInValid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler}/>
          {firstNameInValid && <p className="error-text">Input is not valid.</p>}
        </div>
        <div className={LastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler}/>
          {lastNameInValid && <p className="error-text">Input is not valid.</p>}
        </div>
      </div>
      <div className={emailInputInClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler}/>
        {emailInValid && <p className="error-text">Email is not valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
