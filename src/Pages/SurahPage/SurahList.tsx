import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { SurahData } from "../../API/SurahModel";
import SurahService from "../../API/SurahService";
import TranslateData from "../../API/TranslateModel";
import TranslateService from "../../API/TranslateService";
import TurkishNameAPI from "../../API/TurkishNameAPI";

import { FaAnglesRight } from "react-icons/fa6";
import { GiVineFlower } from "react-icons/gi";
import "./surahList.css";

type Props = {};

const SurahList = (props: Props) => {
  const [surahData, setSurahData] = useState<SurahData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [translateData, setTranslateData] = useState<TranslateData | null>(
    null
  );
  const [surahId, setSurahId] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const surahResponse = await SurahService.getAllSurah();
        setSurahData(surahResponse);

        const translateResponse = await TranslateService.getAnySurahTranslate(
          surahId
        );
        setTranslateData(translateResponse.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [surahId]);

  const getJuzNo = (surahId: number) => {
    const surah = TurkishNameAPI.find((surah) => surah.id === surahId);
    return surah ? surah.juzNo : [];
  };
  const getRevelationPlace = (place: string) => {
    if (place === "Mecca") return "Mekke";
    if (place === "Madina") return "Medine";
    return place;
  };
  return (
    <div className="layout list">
      <div className="header frame d-flex">
        <p>Sureler</p>
      </div>
      <div className="content">
        {loading ? (
          <p>loading...</p>
        ) : (
          surahData?.map((surah, index) => {
            return (
              <div key={index + 1} className="cardy">
                <div className="cardy__title">
                  <p>
                    <span>
                      <GiVineFlower />
                    </span>{" "}
                    {surah.surahNameTurkish}{" "}
                    <span>
                      <GiVineFlower />
                    </span>
                  </p>
                </div>
                <div className="cardy__content">
                  <p>
                    <span>Sûre : </span>
                    {index + 1}. Sûre
                  </p>
                  <p>
                    <span>Cüz : </span>
                    {surah.juzNumbers.length > 0 ? (
                      surah.juzNumbers.map((cuz, idx) => (
                        <b key={idx}>
                          {cuz}
                          {idx < surah.juzNumbers.length - 1 ? " - " : ""}
                        </b>
                      ))
                    ) : (
                      <span>Bilgi yok</span>
                    )}
                  </p>
                  <p>
                    <span>İndirildiği Yer :</span>{" "}
                    {getRevelationPlace(surah.revelationPlace)}
                  </p>
                  <p>
                    <span>Ayet Sayısı :</span> {surah.totalAyah}
                  </p>
                  <Link
                    className="btn w-100"
                    to={`/surah/${index + 1}`}
                    title="OKU"
                  >
                    <span>
                      <FaAnglesRight />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SurahList;
