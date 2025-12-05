// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { UnitsProvider } from "./context/UnitsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UnitsProvider>
    <App />
  </UnitsProvider>
);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { UnitsProvider } from "./context/UnitsContext"; // ⬅ MUST import this!

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <UnitsProvider>
//     {" "}
//     {/* ⬅ Wrap your whole app! */}
//     <App />
//   </UnitsProvider>
// );
