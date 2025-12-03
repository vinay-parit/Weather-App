import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>How's the sky looking today?</h1>
      <div className="search">
        <input type="text" placeholder="Search for a place..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Hero