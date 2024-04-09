import "./topbar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icon";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

const Topbar = () => {
  const [click, setClick] = useState(false);
  const [temperature, setTemperature] = useState(null); // State to hold temperature
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    // Fetch weather data when component mounts
    const fetchWeatherData = async () => {
      try {
        const apiKey = "3e3b2093a482cb508ff412d608a61b3c";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}&units=metric`
        );
        setTemperature(response.data.main.temp);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();

    // Optionally, you can set up a timer to fetch weather data periodically
    // const interval = setInterval(fetchWeatherData, 60000); // Fetch data every minute

    // Cleanup function to clear the interval when component unmounts
    // return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  const handleClick = () => setClick(!click);

  const handleBusinessClick = () => {
    navigate("/BusinessNews");
  };

  const handleEntertainmentClick = () => {
    navigate("/EntertainmentNews");
  };

  const handleLifestyleClick = () => {
    navigate("/LifestyleNews");
  };

  const handleHealthClick = () => {
    navigate("/HealthNews");
  };

  const handleSportsClick = () => {
    navigate("/SportsNews");
  };

  const handleNewsClick = () => {
    navigate("/latestNews");
  };

  return (
    <>
      <div className="topbar">
        <div className="nav-container">
          <div className="logo">
            <img className="logo-img" src="./logo2.jpeg" alt="logo" />
            <p className="logo-title">News4U</p>
          </div>
          <div className="elements">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" onClick={handleNewsClick}>
                NEWS
              </li>
              <li className="nav-item " onClick={handleSportsClick}>
                SPORTS
              </li>
              <li className="nav-item" onClick={handleBusinessClick}>
                BUSINESS
              </li>
              <li className="nav-item" onClick={handleEntertainmentClick}>
                ENTERTAINMENT
              </li>
              <li className="nav-item" onClick={handleLifestyleClick}>
                LIFESTYLE
              </li>
              <li className="nav-item" onClick={handleHealthClick}>
                HEALTH
              </li>
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
            <img src="./weather.png" className="weather-img" alt="weather" />
            <span className="weather-title">{temperature !== null ? `${temperature}°C` : "Loading..."}</span>
          </div>

          <div className="user-email">
            <h2>Welcome,{user ? user.email : "Guest"}</h2>
            {user && (
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
