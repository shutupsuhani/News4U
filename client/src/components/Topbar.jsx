import "./topbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import { useState } from "react";
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
const Topbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const { user,logout } = useAuth();
  
  const handleBusinessClick = () => {
    navigate('/BusinessNews'); 
  };

  const handleEntertainmentClick = () => {
    navigate('/EntertainmentNews'); 
  };

  const handleLifestyleClick = () => {
    navigate('/LifestyleNews'); 
  };

  const handleHealthClick = () => {
    navigate('/HealthNews'); 
  };
  
  const handleSportsClick = () => {
    navigate('/SportsNews'); 
  };

  const handleNewsClick = () => {
    navigate('/latestNews'); 
  };
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
              <li className="nav-item" onClick={handleNewsClick}>NEWS</li>
              <li className="nav-item " onClick={handleSportsClick}>SPORTS</li>
              <li className="nav-item" onClick={handleBusinessClick}>BUSINESS</li>
              <li className="nav-item" onClick={handleEntertainmentClick}>ENTERTAINMENT</li>
              <li className="nav-item" onClick={handleLifestyleClick}>LIFESTYLE</li>
              <li className="nav-item" onClick={handleHealthClick}>HEALTH</li>
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
          <h2>Welcome,{user ? user.email : 'Guest'}</h2>
          {user && <button className="logout-btn" onClick={logout}>Logout</button>}
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Topbar;