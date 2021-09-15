import React from "react";

export default function Weather() {
   return (
    <body> <div>
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
                    
                  <a id="celsius-button" href="/">C</a> | <a id="fahrenheit-button" href="/">F</a> 
                  
                  </div>
    
              </div>
              <div className="col-3 align-self-center">
                <p className="large-temp">
                  <img id="icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt=""/>  
                  <span id="current-temperature">25°C</span>
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



        <p className="my-name">
          <a href="https://github.com/CrypticMango/weather-app-project"  target="_blank" rel="noreferrer" className="name-link">open-source code</a> by Lisa Allen. Hosted on 
          <a href="https://www.netlify.com"  target="_blank" rel="noreferrer" className="name-link"> Netlify.</a>
        </p>
        <script src="src/app.js"></script>
        </div>
        </div>
        </div>
        <button className="btn btn-warning">hello</button>
        </div>
        </body>
    );
    
}