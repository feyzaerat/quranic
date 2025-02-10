import React from "react";
import { Select } from "antd";

import "./SelectBox.css";
import CityAPI from "../../API/CityData";

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
      value: city.title.toLowerCase(),
      label: city.title.charAt(0).toUpperCase() + city.title.slice(1),
    }))}
  />
);

export default City;
