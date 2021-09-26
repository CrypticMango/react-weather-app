import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props){
return  (
          <div className="WeatherInfo">
<div className="container-main">
  <div className="row">
    <div className="col-5 city-info">
      <br />

      <h1 id="current-city">
        {props.data.city}
      </h1>

      <h2 id="day-time">
      <FormattedDate date={props.data.date} />
      </h2>

      <div id="humidity">
        Humidity: {props.data.humidity}%
      </div>

      <span id="wind">
        Wind: {Math.round(props.data.wind)} km/h
      </span>
      
      <div id="description" className="text-capitalize">
      Description: {props.data.description}
      </div> 

      <br/>
      <br/>

    </div>
    <div className="col-3 align-self-center">
      <p className="large-temp">
      <WeatherIcon code={props.data.icon} size={100} />

        <WeatherTemperature celsius={props.data.temperature} />
      
       </p>
    </div>
    
        <div className="col-4 today-column">
          <p className="today-header">
            Today
          </p>
          <p>
            Minimum
            <br />
            <span className="data-colour">{Math.round(props.data.min)}°</span>
          </p>

          <p>
            Maximum
            <br />
            <span className="data-colour">{Math.round(props.data.max)}°</span>
          </p>

          <p>
            Feels Like
            <br />
            <span className="data-colour">{Math.round(props.data.feels)}°</span>
          </p>

          <p>
            Pressure
            <br />
            <span className="data-colour">{Math.round(props.data.pressure)} mbar</span>
          </p>
<br/>
<br/>

        </div>
        
<script src="src/app.js"></script>
</div>
</div>
</div>
);
}