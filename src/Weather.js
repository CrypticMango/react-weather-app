import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
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
    icon: response.data.weather[0].icon,
  })
}

function search(){
  const apiKey = "8e38e8204be405dd999881c7e6509a30";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
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
            </div>
            </div>
            );
          
} else {
search();
return "Loading please wait..";
  }
}
