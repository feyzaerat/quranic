import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SurahData } from "../../../API/SurahModel";
import SurahService from "../../../API/SurahService";

const Surah = () => {
  const [surahData, setSurahData] = useState<SurahData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await SurahService.getAllSurah();
        setSurahData(response);
      } catch (error) {
        console.error("API Error:", error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  return (
    <div className="surahList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        surahData.map((surah, index) => (
          <div key={surah.surahNo} className="surahRow">
            <Link to={`/surah/${index+1}`}>
              <span className="surahNumber">{index+1} - </span>
              <span className="surahNameEnglish">{surah.surahNameTurkish} </span>
              <span className="surahNameArabicName">{surah.surahNameArabic} </span>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Surah;
