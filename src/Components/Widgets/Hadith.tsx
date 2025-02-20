import React, { useEffect, useState } from "react";
import "./widget.css";
import HadithData from "../../API/HadithAPI";
import HadithService from "../../API/HadithService";
import { HiRefresh } from "react-icons/hi";

type Props = {};

const Hadith = (props: Props) => {
  const [hadithData, setHadithData] = useState<HadithData[] | any>([]);

  const getHadith = async () => {
    try {
      const response = await HadithService.getAllHadith();
      const hadithsArray = Array.isArray(response.data.hadiths)
        ? response.data.hadiths
        : Object.values(response.data.hadiths);

      const randomHadith =
        hadithsArray[Math.floor(Math.random() * hadithsArray.length)];
      setHadithData([randomHadith]);

      //console.log("Random Hadith", randomHadith);
    } catch (error) {
      console.log("Hadis API hatası", error);
    }
  };

  useEffect(() => {
    getHadith();
  }, []);

  return (
    <div className="hadith layout">
      <div className="header w-100">
        <p className="widget-header-color">Bir Hadis... ( Buharî )</p>
        <p className="">
          <button className="btn" title="YENİLE" onClick={getHadith}>
            <HiRefresh />
          </button>
        </p>
      </div>
      {hadithData.length > 0 ? (
        hadithData.map((hData: any) => (
          <div className="widget-content__hadith" key={hData.hadithnumber}>
            <p></p>
            <p>{hData.text}</p>
            <p>
              <b>Sahih-i Buhârî </b>
              {hData.hadithnumber}, <b> Sayfa :</b> {hData.reference.book}{" "}
              <b>Hadis No : </b> {hData.reference.hadith}
            </p>
          </div>
        ))
      ) : (
        <p>Loading Hadith...</p>
      )}
    </div>
  );
};

export default Hadith;
