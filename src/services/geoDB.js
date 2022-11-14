import axios from "axios";

const geoURL = import.meta.env.VITE_REACT_APP_GEODB_DOMAIN;
const geoKey = import.meta.env.VITE_REACT_APP_GEODB_KEY;
const geoHost = import.meta.env.VITE_REACT_APP_GEODB_HOST;

export function geoAPI(cityName) {
  return axios({
    url: geoURL + `/cities?namePrefix=${cityName}`,
    method: "get",
    headers: {
      "X-RapidAPI-Key": geoKey,
      "X-RapidAPI-Host": geoHost,
    },
  });
}

export default geoAPI;
