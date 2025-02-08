import React, { useEffect, useState } from "react";
import { Header, Pagination, Surah } from "../../Components";
import { SurahData } from "../../API/SurahModel";
import SurahService from "../../API/SurahService";
import TranslateService from "../../API/TranslateService";
import TranslateData from "../../API/TranslateModel";
import { useNavigate, useParams } from "react-router-dom";
import SurahList from "./SurahList";

const SurahSingle = () => {
  const navigate = useNavigate();
  const { surahId } = useParams<{ surahId: string }>();
  const validSurahId = surahId ? Number(surahId) : 36;

  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [translateData, setTranslateData] = useState<TranslateData | null>(
    null
  );
  const [allSurahs, setAllSurahs] = useState<SurahData[]>([]);

  useEffect(() => {
    SurahService.getAllSurah()
      .then((data) => {
        setAllSurahs(data);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (allSurahs.length > 0) {
      SurahService.getAnySurah(validSurahId)
        .then(setSurahData)
        .catch(console.log);
      TranslateService.getAnySurahTranslate(validSurahId)
        .then((res) => setTranslateData(res.data))
        .catch(console.log);
    }
  }, [validSurahId, allSurahs]);

  return (
    <div className="layout">
      {surahData ? (
        <div className="page">
          <Header
            surahId={validSurahId}
            setSurahId={(id) => navigate(`/surah/${id}`)}
            surahData={surahData}
           
          />
          {translateData && (
            <Surah surahData={surahData} translateData={translateData} />
          )}
          <Pagination
            surahId={validSurahId}
            setSurahId={(id: number) => navigate(`/surah/${id}`)}
            surahData={surahData}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SurahSingle;
