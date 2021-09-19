import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Weather from './Weather';
import Bootstrap from "./Bootstrap";
import Myname from "./Myname";

ReactDOM.render(
  <React.StrictMode>
      <div className="App">
    <Weather defaultCity="New York"/>
    <Myname />
    <Bootstrap />
    </div>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
