import { useEffect, useState } from "react";
import axios from "axios";

const WeatherComponents = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "1f40870ab5msh78a4275c45f6eb4p12d27cjsn95d13d05e218";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          "https://weatherapi-com.p.rapidapi.com/current.json",
          {
            params: { q: "53.1,-0.13" },
            headers: {
              "X-RapidAPI-Key": apiKey,
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>Location: {weatherData.location.name}</p>
          <p>Current Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherComponents;
