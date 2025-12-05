import { createContext, useState } from "react";

export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
  const [temperatureUnit, setTemperatureUnit] = useState("celsius");
  const [speedUnit, setSpeedUnit] = useState("kmh");

  const toggleTempUnit = () =>
    setTemperatureUnit((u) => (u === "celsius" ? "fahrenheit" : "celsius"));

  const toggleSpeedUnit = () =>
    setSpeedUnit((u) => (u === "kmh" ? "mph" : "kmh"));

  return (
    <UnitsContext.Provider
      value={{ temperatureUnit, speedUnit, toggleTempUnit, toggleSpeedUnit }}
    >
      {children}
    </UnitsContext.Provider>
  );
};
