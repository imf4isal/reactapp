import React from "react";


const scaleNames = {
    c: "Celsius", 
    f: "Fahrenheit",
}

export default function TemperatureInput({temperature, scale, onTempChangeHandler}) {

    return (
        <fieldset>
            <legend> Enter Temperature in {scaleNames[scale]}</legend>
            <input type = "text" value={temperature} onChange={(e) => onTempChangeHandler(e, scale)}/>
        </fieldset>
    )
}