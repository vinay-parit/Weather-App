import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <img src="../public/images/logo.svg" alt="logo" />
        </div>
        <div className="menu">
          <img src="../public/images/icon-units.svg" alt="settings" />
          <h3>Units</h3>
          <img src="../public/images/icon-dropdown.svg" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Header