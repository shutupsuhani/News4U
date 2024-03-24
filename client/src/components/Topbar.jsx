import "./topbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import { useState,useEffect } from "react";
import axios from "axios";
const Topbar = ({userEmail}) => {
  const [click, setClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  
 

  return (
    <>
      <div className="topbar">
        <div className="nav-container">
          <div className="logo">
            <img className="logo-img" src="./logo2.jpeg" />
            <p className="logo-title">News4U</p>
          </div>
          <div className="elements">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">NEWS</li>
              <li className="nav-item">SPORTS</li>
              <li className="nav-item">BUSINESS</li>
              <li className="nav-item">ENTERTAINMENT</li>
              <li className="nav-item">LIFESTYLE</li>
              <li className="nav-item">HEALTH</li>
            </ul>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>

          <div className="weather">
            <img src="./weather.png" className="weather-img" />
            <span className="weather-title">20°C</span>
            
          </div>

          <div className="user-email">
            {userEmail && <p>{userEmail}</p>}
          </div>

          <div className="user-profile">
              <span className="user-text">S</span>
          </div>

        </div>
      </div>
    </>
  );
};

export default Topbar;
