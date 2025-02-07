import React, { useEffect, useState } from "react";


import { Header, Pagination, Surah } from "../../Components";
import { SurahData } from "../../API/SurahModel";
import SurahService from "../../API/SurahService";

import TranslateService from "../../API/TranslateService";
import TranslateData from "../../API/TranslateModel";

const SurahSingle = () => {
  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [translateData, setTranslateData] = useState<TranslateData | null>(
    null
  );

  const [surahId, setSurahId] = useState<number>(1);

  useEffect(() => {
    SurahService.getAnySurah(surahId)
      .then((res) => setSurahData(res))
      .catch((err) => console.log(err));

    TranslateService.getAnySurahTranslate(surahId)
      .then((res) => setTranslateData(res.data))
      .catch((err) => console.log(err));
  }, [surahId]);

  return (
    <>
      <div className="layout">
        {surahData ? (
          <div className="page">
            <Header
              surahId={surahId}
              setSurahId={setSurahId}
              surahData={surahData}
            />
            {translateData && (
              <Surah surahData={surahData} translateData={translateData} />
            )}
            <Pagination
              surahId={surahId}
              setSurahId={setSurahId}
              surahData={surahData}
            />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default SurahSingle;
