import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

 function handleResponse(response) {
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    wind: response.data.wind.speed,
    date: new Date (response.data.dt * 1000),
    humidity: response.data.main.humidity,
    city: response.data.name,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    feels: response.data.main.feels_like,
    pressure: response.data.main.pressure,
    min: response.data.main.temp_min,
    max: response.data.main.temp_max,
  })
  console.log(response);
}

function search(){
  const apiKey = "8e38e8204be405dd999881c7e6509a30";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
event.preventDefault();
search(city)
}

function handleCityChange(event){
setCity(event.target.value);
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
          
          <form onSubmit={handleSubmit} id="search-form">
            <div className="input-group" style={{width: '45rem'}}>
              <input
                id="city-input"
                type="text"
                className="form-control"
                placeholder="Enter your city name"
                aria-label="users city with two button addons"
                onChange={handleCityChange}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
    
              <button className="btn btn-primary" id="current-button" type="button">
                Current
              </button>
              </div>
              
              </form>
              <WeatherInfo data={weatherData}/>
              <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
            </div>
            );
          
} else {
search();
return "Loading please wait..";
  }
}
