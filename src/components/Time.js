import { useEffect, useRef, useState } from "react";

function Time(){
    const [date, setDate] = useState(new Date())
    const buttonRef = useRef();

    const tick = () => {
        setDate(new Date());
    }

    useEffect(()=> {
        buttonRef.current = setInterval(tick, 1000);
        return ()=> {clearInterval(buttonRef.current)};
    }, []);

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()} </p>
            <button type="button" onClick={() => {clearInterval(buttonRef.current)}}> Clear Time </button>
        </div>

        
    );
}

export default Time;