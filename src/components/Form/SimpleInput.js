import { useRef, useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');

  const nameRef = useRef();
  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    const enteredValue = nameRef.current.value;

    console.log(enteredName, enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={enteredNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
