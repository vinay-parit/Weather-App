// import React, { useEffect } from "react";
// import axios from "axios";
// import Weather from "./component/Weather";
// import Header from "./component/Header";
// import Hero from "./component/Hero";

// const App = () => {
//   useEffect(() => {
//     axios(
//       "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
//     ).then((res) => console.log(res.data));
//   }, []);

//   return (
//     <div className="body">
//       <div className="main">
//         <Header />
//         <Hero />
//         <Weather />
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Weather from "./component/Weather";

const App = () => {
  const [city, setCity] = useState("Berlin");
  const [coords, setCoords] = useState({ lat: 52.52, lon: 13.41 });
  const [weather, setWeather] = useState(null);

  // GET COORDINATES OF CITY
  const getCoordinates = async (cityName) => {
    const geo = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
    );

    if (!geo.data.results) return;

    const { latitude, longitude } = geo.data.results[0];

    setCoords({ lat: latitude, lon: longitude });
  };

  // FETCH WEATHER
  const fetchWeather = async () => {
    setWeather(null); 
    const url = `https://api.open-meteo.com/v1/forecast?
      latitude=${coords.lat}&longitude=${coords.lon}
      &current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,precipitation
      &hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code
`.replace(/\s+/g, "");


    const res = await axios.get(url);
    setWeather(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, [coords]);

  return (
    <div className="body">
      <div className="main">
        <Header />
        <Hero city={city} setCity={setCity} getCoordinates={getCoordinates} />
        <Weather weather={weather} city={city} />
      </div>
    </div>
  );
};

export default App;
