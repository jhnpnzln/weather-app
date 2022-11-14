import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router";
import WeatherTable from "../components/table";
import Buttons from "../components/button";
import WeatherAPI from "../services/weatherAPI";

export function WeatherPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isAuthenticated } = useAuth0();
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState("");

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    !isAuthenticated && navigate("/");

    WeatherAPI(id).then((res) => {
      setWeatherData(res.data.list);
      setCity(res.data.city.name);
    });
  }, []);

  return (
    <div className="weather-container">
      <h3>Weather Forecast for {city}</h3>
      <WeatherTable items={weatherData} />
      <div className="weather-button-container d-grid gap-2 d-md-flex justify-content-md-end">
        <Buttons text="Back" handleOnClick={handleBack} />
      </div>
    </div>
  );
}
