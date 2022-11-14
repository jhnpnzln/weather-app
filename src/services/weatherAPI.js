import axios from "axios";

const weatherURL = import.meta.env.VITE_REACT_APP_WEATHER_API_URL;
const weatherKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

export function WeatherAPI(cityName) {
  return axios.get(weatherURL + `/forecast?q=${cityName}&appid=${weatherKey}`);
}

export default WeatherAPI;
