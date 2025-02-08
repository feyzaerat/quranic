import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SurahData } from "../../../API/SurahModel";
import SurahService from "../../../API/SurahService";

type Props = {
  searchSurah: string;
};
const Surah = ({ searchSurah }: Props) => {
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

  const normalizeTurkishChars = (str: string) => {
    return str
      .replace(/[ıİ]/g, "i")
      .replace(/[î]/g, "i")
      .replace(/[â]/g, "a")
      .replace(/[û]/g, "u")
  };
  const filteredSurahData = surahData?.filter((surah) =>
    normalizeTurkishChars(surah.surahNameTurkish)
      .toLowerCase()
      .includes(normalizeTurkishChars(searchSurah).toLowerCase())
  );
  return (
    <div className="surahList">
      {loading ? (
        <p>Loading...</p>
      ) : (
        filteredSurahData.map((surah, index) => (
          <div key={surah.surahNo} className="surahRow">
            <Link to={`/surah/${index + 1}`}>
              <span className="surahNumber"><b>{index + 1} - </b></span>
              <span className="surahNameEnglish">
                {surah.surahNameTurkish}{" "}
              </span>
              <span className="surahNameArabicName">
                {surah.surahNameArabic}{" "}
              </span>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Surah;
