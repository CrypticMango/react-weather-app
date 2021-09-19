import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
 function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    date: new Date (response.data.dt * 1000),
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon
  })
}

if (weatherData.ready) {
  return (
    <div className="Weather">
        <div className="card-whole-app" style={{width: '65rem'}}>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
          </div>

          {/* search your city name */}
          
          <form id="search-form">
            <div className="input-group" style={{width: '45rem'}}>
              <input
                id="city-input"
                type="text"
                className="form-control"
                placeholder="Enter your city name"
                aria-label="users city with two button addons"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
    
              <button className="btn btn-primary" id="current-button" type="button">
                Current
              </button>
    
            </div>
          </form>
    
          {/* Center Info */}
          
          <div className="container-main">
            <div className="row">
              <div className="col-5 city-info">
                <br />
    
                <h1 id="current-city">
                  Saskatoon
                </h1>
    
                <h2 id="day-time">
                <FormattedDate date={weatherData.date} />
                </h2>
    
                <div id="humidity">
                  Humidity: {weatherData.humidity}%
                </div>
    
                <span id="wind">
                  Wind: {Math.round(weatherData.wind)} km/h
                </span>
                
                <div id="description" className="text-capitalize">
                Description: {weatherData.description}
                </div> 
    
                <br/>
                <br/>
    
                <div id="unit-conversion-buttons">
                    
                  <a id="celsius-button" href="/">C</a> | <a id="fahrenheit-button" href="/">F</a> 
                  
                  </div>
    
              </div>
              <div className="col-3 align-self-center">
                <p className="large-temp">
                  <img id="icon" 
                  src="http://openweathermap.org/img/wn/10d@2x.png" 
                  alt=""/>  

                  <span id="current-temperature">
                    {Math.round(weatherData.temperature)}
                    </span>
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
                  </div>
    
                  {/* days of the week */}
    
                  <div className="col-8 align-self-center">
                    <div className="weather-by-the-day" id="weather-forecast">
                      <i className="fas fa-sun daily-icon"></i>
                      <br />
                      MON
                      <br />
                      22°C
                    </div>
                  </div>
        <script src="src/app.js"></script>
        </div>
        </div>
        </div>
       
        </div>
  );
} else {

  const apiKey = "8e38e8204be405dd999881c7e6509a30";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);

  return "Loading please wait..";
}


}