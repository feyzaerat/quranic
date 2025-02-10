import React, { useEffect, useState } from "react";
import "./widget.css";
import PrayService from "../../API/PrayService";
import { PrayResponse, PrayResult } from "../../API/PrayModel";
import { CitySelect } from "../../Components";

type Props = {};

const Pray = (props: Props) => {
  const [city, setCity] = useState<string>("kocaeli");
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

  return (
    <div className="pray layout">
      <div className="header w-100 text-center">
        <p>Namaz Vakitleri</p>
      </div>
      <div className="widget-content">
        <div className="location__container">
          <CitySelect onCityChange={setCity} />
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
