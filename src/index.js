import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import Search from './Search';

ReactDOM.render(
  <React.StrictMode>
      <div className="App">
        <h1>Weather App</h1>
    <Search />
    
   
    </div>
    <p> <a href="https://github.com/CrypticMango/react-weather-app" target="_blank" rel="noreferrer">Open Sourced Project</a> by Lisa Allen hosted on <a href="https://www.netlify.com" target="_blank" rel="noreferrer">Netlify</a></p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
