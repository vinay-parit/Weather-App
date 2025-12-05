// import React from 'react'

// const Hero = () => {
//   return (
//     <div className="hero-section">
//       <h1>How's the sky looking today?</h1>
//       <div className="search">
//         <input type="text" placeholder="Search for a place..." />
//         <button>Search</button>
//       </div>
//     </div>
//   );
// }

// export default Hero



const Hero = ({ city, setCity, getCoordinates }) => {
  return (
    <div className="hero-section">
      <h1>How's the sky looking today?</h1>

      <div className="search">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Search for a place..."
        />

        <button onClick={() => getCoordinates(city)}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
