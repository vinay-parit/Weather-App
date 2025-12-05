// import React from "react";

// const Weather = () => {
//   return (
//     <div className="weather">
//       <div className="left">
//         <div className="weather-indi">
//           <div className="weather-city">
//             <h3>Berlin, Germany </h3>
//             <h4>Tuseday, Aug 5, 2025</h4>
//           </div>

//           <div className="weather-temp">
//             <img src="../public/images/icon-sunny.webp" alt="sun" />
//             <h1>20</h1>
//           </div>
//         </div>

//         <div className="weather-info">
//           <div className="feels">
//             <p>Feels Like</p> <h3>18</h3>
//           </div>
//           <div className="humidity">
//             <p>Humidity</p> <h3>46%</h3>
//           </div>
//           <div className="wind">
//             <p>Wind</p> <h3>14 km/h</h3>
//           </div>
//           <div className="precipitation">
//             <p>Precipitation</p> <h3>0 mm</h3>
//           </div>
//         </div>

//         <div className="weather-daily">
//           <h3>Daily forecast</h3>

//           <div className="days">
//             <div className="tue">
//               <p>Tue</p>
//               <img src="../public/images/icon-rain.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="wed">
//               <p>Wed</p>
//               <img src="../public/images/icon-drizzle.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="thu">
//               <p>Thu</p>
//               <img src="../public/images/icon-sunny.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="fri">
//               <p>Fri</p>
//               <img src="../public/images/icon-partly-cloudy.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="sat">
//               <p>Sat</p>
//               <img src="../public/images/icon-storm.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="sun">
//               <p>Sun</p>
//               <img src="../public/images/icon-snow.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>

//             <div className="mon">
//               <p>Mon</p>
//               <img src="../public/images/icon-fog.webp" alt="" />
//               <div className="day-tem">
//                 <span>20</span>
//                 <span>14</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="weather-hour">
//         <div className="heading">
//           <h2>Hourly forecast</h2>
//           <div className="menu-day">
//             <p>Tuesday</p>
//             <img src="../public/images/icon-dropdown.svg" alt="" />
//           </div>
//         </div>

//         <div className="time">
//           <div className="pm-3">
//             <div className="hour-time">
//               <img src="../public/images/icon-overcast.webp" alt="" />
//               <p>3 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-4">
//             <div className="hour-time">
//               <img src="../public/images/icon-partly-cloudy.webp" alt="" />
//               <p>4 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-5">
//             <div className="hour-time">
//               <img src="../public/images/icon-sunny.webp" alt="" />
//               <p>5 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-6">
//             <div className="hour-time">
//               <img src="../public/images/icon-overcast.webp" alt="" />
//               <p>6 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-7">
//             <div className="hour-time">
//               <img src="../public/images/icon-snow.webp" alt="" />
//               <p>7 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-8">
//             <div className="hour-time">
//               <img src="../public/images/icon-fog.webp" alt="" />
//               <p>8 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-9">
//             <div className="hour-time">
//               <img src="../public/images/icon-snow.webp" alt="" />
//               <p>9 PM</p>
//             </div>
//             <span>20</span>
//           </div>

//           <div className="pm-10">
//             <div className="hour-time">
//               <img src="../public/images/icon-overcast.webp" alt="" />
//               <p>10 PM</p>
//             </div>
//             <span>20</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;



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
            <img src={`/src/assets/images/${icon}`} alt="icon" />
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
                  src={`/src/assets/images/${getWeatherIcon(
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
                  src={`/src/assets/images/${getWeatherIcon(
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
