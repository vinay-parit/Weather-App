import React, { useContext } from "react";
import { UnitsContext } from "../context/UnitsContext";
import { getWeatherIcon } from "../utils/icons";

const toF = (c) => (c * 9) / 5 + 32;
const toMph = (kmh) => kmh * 0.621371;

const Weather = ({ weather, city }) => {
  const { temperatureUnit, speedUnit } = useContext(UnitsContext);

  if (!weather)
    return (
      <div className="loading">
        <div className="load-card"></div>
        <div className="load-small"></div>
        <div className="load-small"></div>
      </div>
    );

  const current = weather.current;
  const hourly = weather.hourly;

  const temp =
    temperatureUnit === "celsius"
      ? current.temperature_2m
      : toF(current.temperature_2m);

  const wind =
    speedUnit === "kmh"
      ? current.wind_speed_10m
      : toMph(current.wind_speed_10m).toFixed(1);

  const icon = getWeatherIcon(current.weather_code);

  return (
    <div className="weather">
      <div className="left">
        {/* CURRENT WEATHER CARD */}
        <div className="weather-indi">
          <div className="weather-city">
            <h3>{city}</h3>
            <h4>{new Date(current.time).toDateString()}</h4>
          </div>

          <div className="weather-temp">
            <img src={`/images/${icon}`} alt="icon" />
            <h1>{Math.round(temp)}°</h1>
          </div>
        </div>

        {/* INFO BOXES */}
        <div className="weather-info">
          <div className="feelslike">
            <p>Feels Like</p>
            <h3>
              {temperatureUnit === "celsius"
                ? Math.round(current.apparent_temperature)
                : Math.round(toF(current.apparent_temperature))}
              °
            </h3>
          </div>

          <div className="humidity">
            <p>Humidity</p>
            <h3>{current.relative_humidity_2m}%</h3>
          </div>

          <div className="wind">
            <p>Wind</p>
            <h3>
              {wind} {speedUnit === "kmh" ? "km/h" : "mph"}
            </h3>
          </div>

          <div className="precip">
            <p>Precipitation</p>
            <h3>{current.precipitation} mm</h3>
          </div>
        </div>

        {/* DAILY FORECAST */}
        <div className="weather-daily">
          <h3>Daily forecast</h3>

          <div className="days">
            {hourly.temperature_2m.slice(0, 7).map((t, i) => (
              <div key={i} className="tue">
                <p>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</p>

                <img
                  src={`/images/${getWeatherIcon(
                    hourly.weather_code[i]
                  )}`}
                />

                <div className="day-tem">
                  <span>{Math.round(t)}°</span>
                  <span>{Math.round(t - 5)}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOURLY */}
      <div className="weather-hour">
        <div className="heading">
          <h2>Hourly forecast</h2>
        </div>

        <div className="time">
          {hourly.temperature_2m.slice(0, 8).map((t, i) => (
            <div key={i} className="pm-3">
              <div className="hour-time">
                <img
                  src={`/images/${getWeatherIcon(
                    hourly.weather_code[i]
                  )}`}
                />
                <p>{i + 1} PM</p>
              </div>

              <span>{Math.round(t)}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
