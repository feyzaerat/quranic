import React, { useEffect, useState } from "react";

import PrayService from "../../API/PrayService";
import { PrayResponse, PrayResult } from "../../API/PrayModel";
import { CitySelect } from "../../Components";

import Gregorian from "../Dates/Gregorian";
import Hijri from "../Dates/Hijri";

import { PiFlowerFill } from "react-icons/pi";
import "./widget.css";

const Pray = () => {
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem("selectedCity") || "kocaeli";
  });
  const [prayData, setPrayData] = useState<PrayResult[]>([]);

  useEffect(() => {
    const getPrays = async () => {
      try {
        const response = await PrayService.getAllPray(city);
        const data: PrayResponse = response.data;
        setPrayData(data.result);
      } catch (error) {
        console.log("API hatası:", error);
      }
    };
    getPrays();
  }, [city]);

  const handleSaveCity = (selectedCity: string) => {
    setCity(selectedCity);
    localStorage.setItem("selectedCity", selectedCity);
  };

  return (
    <div className="pray layout">
      <div className="header w-100">
        <p>
          Namaz Vakitleri <PiFlowerFill />{" "}
          {city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()}
        </p>
        <span></span>
        <div className="date-container">
          <Gregorian /> <PiFlowerFill />
          <Hijri />
        </div>
      </div>
      <div className="widget-content">
        <div className="location__container">
          <CitySelect onCityChange={handleSaveCity} />
        </div>
        <div className="pray__container">
          {prayData.length > 0 ? (
            prayData.map((pray, index) => (
              <div key={index} className="time__container">
                <p>
                  <b>{pray.vakit}:</b> {pray.saat}
                </p>
              </div>
            ))
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pray;
