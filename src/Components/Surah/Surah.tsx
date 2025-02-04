import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Surah = {
  surahName: string;
  surahNameArabic: string;
  revelationPlace: string;
  totalAyah: number;
};

const Surah = () => {
  const [surahData, setSurahData] = useState<Surah[] | null>(null);

  useEffect(() => {
    fetch("https://quranapi.pages.dev/api/surah.json")
      .then((response) => response.json())
      .then((data) => setSurahData(data)) 
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {surahData ? (
        <div className="surahList">
          {surahData.map((surah, index) => (
            <div key={index} className="surahRow">
              <Link to="">
                <span className="surahNumber">{index + 1} - </span>
                <span className="surahNameEnglish">{surah.surahName} </span>
                <span className="surahNameArabicName">{surah.surahNameArabic} </span>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Surah;
