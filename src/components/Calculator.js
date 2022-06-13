import React, { Fragment } from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {

    state = {
        temperature: '',
        scale: 'c'
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    render() {

        const {temperature, scale} = this.state;
        
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;


        return (
            <Fragment>
                <TemperatureInput scale = "c" temperature={celsius} onTempChangeHandler = {this.handleChange}/>
                <TemperatureInput scale = "f" temperature={fahrenheit} onTempChangeHandler = {this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </Fragment>
        );
    }
}