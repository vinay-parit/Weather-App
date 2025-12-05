// import React from 'react'

// const Header = () => {
//   return (
//     <div className="header">
//       <nav>
//         <div className="logo">
//           <img src="../public/images/logo.svg" alt="logo" />
//         </div>
//         <div className="menu">
//           <img src="../public/images/icon-units.svg" alt="settings" />
//           <h3>Units</h3>
//           <img src="../public/images/icon-dropdown.svg" alt="" />
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header



import React, { useState, useContext } from "react";
import { UnitsContext } from "../context/UnitsContext";

const Header = () => {
  const { toggleTempUnit, temperatureUnit, toggleSpeedUnit, speedUnit } =
    useContext(UnitsContext);

  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src="/src/assets/images/logo.svg" alt="logo" />
        </div>

        <div className="menu" onClick={() => setOpen(!open)}>
          <img src="/src/assets/images/icon-units.svg" alt="settings" />
          <h3>Units</h3>
          <img src="/src/assets/images/icon-dropdown.svg" />
        </div>

        {/* DROPDOWN */}
        <div className={`dropdown ${open ? "show" : ""}`}>
          <p onClick={toggleTempUnit}>Temperature: {temperatureUnit}</p>
          <p onClick={toggleSpeedUnit}>Wind: {speedUnit}</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
