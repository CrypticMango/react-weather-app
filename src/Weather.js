import React from "react";

export default function Weather() {
   return ( <div>
        <div class="card-whole-app" style={{width: '65rem'}}>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
          </div>

          // search your city name
          
          <form id="search-form">
            <div class="input-group" style={{width: '45rem'}}>
              <input
                id="city-input"
                type="text"
                class="form-control"
                placeholder="Enter your city name"
                aria-label="users city with two button addons"
              />
              <button class="btn btn-primary" type="submit">
                Search
              </button>
    
              <button class="btn btn-primary" id="current-button" type="button">
                Current
              </button>
    
            </div>
          </form>
    
          // Center Info
          
          <div class="container-main">
            <div class="row">
              <div class="col-5 city-info">
                <br />
    
                <h1 id="current-city">
                  Saskatoon
                </h1>
    
                <h2 id="day-time">
                  May 22nd | 11:00AM
                </h2>
    
                <h3 id="humidity">
                  26% humidity
                </h3>
    
                <span id="wind">
                  wind
                </span>
                
                <div id="description">
                  sunny
                </div> 
    
                <br/>
                <br/>
    
                <div id="unit-conversion-buttons">
                    
                  <a id="celsius-button" href="">C</a> | <a id="fahrenheit-button" href="">F</a> 
                  
                  </div>
    
              </div>
              <div class="col-3 align-self-center">
                <p class="large-temp">
                  <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""/>  
                  <span id="current-temperature">25°C</span>
                 </p>
              </div>
              
                  <div class="col-4 today-column">
                    <p class="today-header">
                      Today
                    </p>
                    <p>
                      Morning
                      HOT <i class="fas fa-temperature-high"></i>
                    </p>
    
                    <p>
                      Noon
                      SUNNY <i class="fas fa-thermometer-half"></i>
                    </p>
    
                    <p>
                      Evening
                      MISTING <i class="fas fa-cloud-rain"></i>
                    </p>
    
                    <p>
                      Night
                      CHILLY <i class="fas fa-temperature-low"></i>
                    </p>
                  </div>
    
                  // days of the week
    
                  <div class="col-8 align-self-center">
                    <div class="weather-by-the-day" id="weather-forecast">
                      <i class="fas fa-sun daily-icon"></i>
                      <br />
                      MON
                      <br />
                      22°C
                    </div>
                  </div>

        <p class="my-name">
          <a href="https://github.com/CrypticMango/weather-app-project"  target="_blank" rel="noreferrer" class="name-link">open-source code</a> by Lisa Allen. Hosted on
          <a href="https://www.netlify.com"  target="_blank" rel="noreferrer" class="name-link">Netlify.</a>
        </p>
        <script src="src/app.js"></script>
        </div>
        </div>
        </div>
        </div>
    );
}