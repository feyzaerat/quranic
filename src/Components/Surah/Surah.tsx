import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Surah = {
  number: number;
  englishName: string;
  name: string;
  revelationType: string;
};

type ApiResponse = {
  data: Surah[];
};

const Surah = () => {
  const [surahData, setSurahData] = useState<Surah[] | null>(null);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((data: ApiResponse) => setSurahData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {surahData ? (
        <div className="surahList">
          {surahData.map((surah) => (
            <div key={surah.number} className="surahRow">
              <Link to="">
                <span className="surahNumber">{surah.number} - </span>
                <span className="surahNameEnglish">{surah.englishName} </span>
                <span className="surahNameArabicName">({surah.name}) </span>
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
