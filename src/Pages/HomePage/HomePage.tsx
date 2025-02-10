import React, { useEffect, useState } from "react";
import { Hadith, Header, Pagination, Pray, QuranCards } from "../../Components";
import { SurahData } from "../../API/SurahModel";
import SurahService from "../../API/SurahService";

import TranslateService from "../../API/TranslateService";
import TranslateData from "../../API/TranslateModel";
import "./homePage.css"

const HomePage = () => {
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
      <div className="layout homePage">
       <div className="widget">
        <Pray/>
       </div>
       <div className="widget">
        <Hadith/>
       </div>
       <div className="widget">
        <QuranCards/>
       </div>
      </div>
    </>
  );
};

export default HomePage;
