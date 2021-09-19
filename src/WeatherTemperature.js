import React, {useState} from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
    const[unit, setUnit] = useState("celsius");


    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }


    if (unit === "celsius") {

    return (
        <div className="WeatherTemperature">
            <span id="current-temperature">
            {Math.round(props.celsius)}
    </span>
            <span className="unit-buttons">
                °C|
                <a href="/" onClick={showFahrenheit}>
                    °F
                    </a>
            </span>
        </div>
);
} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
        <div className="WeatherTemperature">
            <span id="current-temperature">
    {Math.round(fahrenheit)}
            </span>
            <span className="unit-buttons"> 
            <a href="/" onClick={showCelsius}>
                °C
                </a>
                |°F
            </span>
        </div>
        );
    }
} 