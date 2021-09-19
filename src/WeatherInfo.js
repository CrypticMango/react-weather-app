import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
      <WeatherIcon code={props.data.icon} />

        <WeatherTemperature celsius={props.data.temperature} />
      
       </p>
    </div>
    
        <div className="col-4 today-column">
          <p className="today-header">
            Today
          </p>
          <p>
            Morning
            HOT <i className="fas fa-temperature-high"></i>
          </p>

          <p>
            Noon
            SUNNY <i className="fas fa-thermometer-half"></i>
          </p>

          <p>
            Evening
            MISTING <i className="fas fa-cloud-rain"></i>
          </p>

          <p>
            Night
            CHILLY <i className="fas fa-temperature-low"></i>
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