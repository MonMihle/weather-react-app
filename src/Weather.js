import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div clasName="row">
          <div clasName="col-9">
            <input
              type="search"
              placeholder="enter location..."
              className="form-control"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Cape Town</h1>
      <ul>
        <li>Thursday</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear"
          />
          17°C
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
