import React, { useEffect, useState } from "react";

import { Surah } from "../../Pages";
import { Header } from "../../Components";
import { SurahData } from "../../API/SurahModel";
import SurahService from "../../API/SurahService";

const HomePage = () => {
  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [surahId, setSurahId] = useState<number>(1);

  useEffect(() => {
    SurahService.getAnySurah(surahId)
      .then((res) => setSurahData(res.data))
      .catch((err) => console.log(err));
  }, [surahId]);

  return (
    <div className="layout">
      {surahData ? (
        <div className="page">
          <Header
            surahId={surahId}
            setSurahId={setSurahId}
            surahData={surahData}
          />
          <Surah surahData={surahData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
