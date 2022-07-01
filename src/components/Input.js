import React from "react";

function Input({type, placeholder}, ref){
    return <input ref={ref} type={type} placeholder={placeholder} />
}

const forwardInput = React.forwardRef(Input);

export default forwardInput;