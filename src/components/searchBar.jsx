import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AsyncPaginate } from "react-select-async-paginate";
import Buttons from "./button";
import geoAPI from "../services/geoDB";

export const SearchBar = ({ label, placeHolder, ...props }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(null);

  const handleOnchage = (params) => {
    setSearch(params);
  };

  const loadOptions = (inputVal) => {
    return geoAPI(inputVal).then((response) => {
      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.name}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    });
  };

  const handleDisplayWeather = () => {
    navigate(`/weather/${search?.value}`);
  };

  return (
    <>
      {label != "" ? <label>{label}</label> : null}
      <AsyncPaginate
        placeHolder={placeHolder}
        debounceTimeout={600}
        onChange={handleOnchage}
        loadOptions={loadOptions}
      />
      <Buttons text="Display Weather" handleOnClick={handleDisplayWeather} />
    </>
  );
};

export default SearchBar;
