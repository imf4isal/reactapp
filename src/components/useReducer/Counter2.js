import { useReducer } from "react";

const initialState = {
    counter1: 0,
    counter2: 0
};

const reducer = (state, action) => {
    switch(action.type){
        case "increment1":
            return {...state, counter1: state.counter1 + action.value};
        case "decrement1":
            return {...state, counter1: state.counter1 - action.value};
        case "increment2":
            return {...state, counter2: state.counter2 + action.value};
        case "decrement2":
            return {...state, counter2: state.counter2 - action.value};
        default:
            return state;
    }
}

function Counter2(){
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>count: {count.counter1}</p>
            <button type="button" onClick={() => dispatch({type: 'increment1', value: 1})}> increment by 1 </button>
            <button type="button" onClick={() => dispatch({type: 'decrement1', value: 1})}> decrement by 1 </button>
            <p>count: {count.counter2}</p>
            <button type="button" onClick={() => dispatch({type: 'increment2', value: 2})}> increment by 2 </button>
            <button type="button" onClick={() => dispatch({type: 'decrement2', value: 2})}> decrement by 2 </button>
        </div>
    );
}

export default Counter2;