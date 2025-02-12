import React, { useEffect, useState } from "react";
import "./widget.css";
import HadithData from "../../API/HadithAPI";
import HadithService from "../../API/HadithService";

type Props = {};

const Hadith = (props: Props) => {
  const [hadithData, setHadithData] = useState<HadithData[] | any>([]);

  useEffect(() => {
    const getHadith = async () => {
      try {
        const response = await HadithService.getAllHadith();
        const hadithsArray = Array.isArray(response.data.hadiths)
          ? response.data.hadiths
          : Object.values(response.data.hadiths);

        const randomHadith =
          hadithsArray[Math.floor(Math.random() * hadithsArray.length)];
        setHadithData([randomHadith]);

        console.log("Random Hadith", randomHadith);
      } catch (error) {
        console.log("Hadis API hatası", error);
      }
    };
    getHadith();
  }, []);

  return (
    <div className="hadith">
      <div className="header w-100">Bir Hadis...</div>
      {hadithData.length > 0 ? (
        hadithData.map((hData: any) => (
          <div key={hData.hadithnumber}>
            <p>{hData.hadithnumber}</p>
            <p>{hData.text}</p>
            
          </div>
        ))
      ) : (
        <p>Loading Hadith...</p>
      )}
    </div>
  );
};

export default Hadith;
