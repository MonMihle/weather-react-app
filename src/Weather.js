import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  //const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    set weatherData({temperature: response.data.main.temperature,
    wind:});
    setReady(true);
  }

  if (ready) 
  {
    return (
      <div className="Weather">
        <br />
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter location..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <h1>Cape Town</h1>
        <ul>
          <li>Thursday</li>
          <li>Clear with periodic clouds</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Clear"
              <div className="float-left">
            />
            <div className = "float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">°C</span>
          </div>
          </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity:55%</li>
              <li>Wind:19km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
    }

  else {
    const apiKey = "c11eb907238f0b8255b8ad494906f796";
    let city="Cape Town"
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading"
  }
    } 

