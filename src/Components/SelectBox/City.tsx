import React from "react";
import CityAPI from "../../API/CityData";
import { Select } from "antd";
import "./SelectBox.css";


type CityProps = {
  onCityChange: (city: string) => void;
};

const City: React.FC<CityProps> = ({ onCityChange }) => (
  <Select
    showSearch
    placeholder="Şehir Seçiniz. . ."
    optionFilterProp="label"
    onChange={onCityChange}
    options={CityAPI.map((city) => ({
      value: city.endpoint.toLowerCase(),
      label: city.title.charAt(0).toUpperCase() + city.title.slice(1),
    }))}
  />
);

export default City;
