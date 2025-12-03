import React from 'react'

const Weather = () => {
  return (
    <div className="weather">
      <div className="left">
        <div className="weather-indi">
          <div className="weather-city">
            <h3>Berlin, Germany </h3>
            <h4>Tuseday, Aug 5, 2025</h4>
          </div>

          <div className="weather-temp">
            <img src="../public/images/icon-sunny.webp" alt="sun" />
            <h1>20</h1>
          </div>
        </div>

        <div className="weather-info">
          <div className="feels">
            <p>Feels Like</p> <h3>18</h3>
          </div>
          <div className="humidity">
            <p>Humidity</p> <h3>46%</h3>
          </div>
          <div className="wind">
            <p>Wind</p> <h3>14 km/h</h3>
          </div>
          <div className="precipitation">
            <p>Precipitation</p> <h3>0 mm</h3>
          </div>
        </div>
      </div>

      <div className="weather-hour">
        <div className="heading">
          <h2>Hourly forecast</h2>
          <div className="menu-day">
            <p>Tuesday</p>
            <img src="../public/images/icon-dropdown.svg" alt="" />
          </div>
        </div>

        <div className="time">
          <div className="pm-3">
            <img src="../public/images/icon-overcast.webp" alt="" />
            <p>3 PM</p>
            <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather