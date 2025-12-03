import React, { useEffect } from "react";
import axios from "axios";
import Weather from "./component/Weather";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  useEffect(() => {
    axios(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
    ).then((res) => console.log(res.data));
  }, []);

  return (
    <div className="body">
      <div className="main">
        <Header />
        <Hero />
        <Weather />
      </div>
    </div>
  );
};

export default App;
