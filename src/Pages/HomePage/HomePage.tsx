import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Ayah = {
  number: number;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
};

type SurahData = {
  data: {
    name: string;
    englishName: string;
    revelationType: string;
    ayahs: Ayah[];
  };
};

type Props = {};

const HomePage = (props: Props) => {
  const convertToArabicNumbers = (num: number): string => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/\d/g, (d) => arabicNumbers[parseInt(d)]);
  };

  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [surahId, setSurahId] = useState<number>(107); // Başlangıçta Surah 107

  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
      .then((response) => response.json())
      .then((data) => setSurahData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [surahId]);

  const bismillahText = "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ";

  const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSurahId(Number(event.target.value));
  };

  return (
    <div className="layout">
      {surahData ? (
        <div className="page">
          <div className="header">
            <div className="d-flex gap-2">
              <h2>{surahData.data.englishName}</h2>
              <select
                value={surahId}
                onChange={handleSurahChange}
                className="btn btn-dark my-1"
              >
                {Array.from({ length: 114 }, (_, index) => index + 1).map(
                  (id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  )
                )}
              </select>
            </div>
            <h2 className="name">{surahData.data.name}</h2>
          </div>

          {surahData.data.ayahs[0].text.startsWith(bismillahText) && (
            <p className="text-end bismillah">{bismillahText}</p>
          )}

          <div className="surah">
            {surahData?.data.ayahs[0].text && (
              <div key={surahData.data.ayahs[0].numberInSurah}>
                {surahId === 1 &&
                surahData.data.ayahs[0].numberInSurah - 1 > 1 ? (
                  <span>
                    {convertToArabicNumbers(
                      surahData.data.ayahs[0].numberInSurah - 1
                    )}
                  </span>
                ) : surahId !== 1 ? (
                  <span>
                    {convertToArabicNumbers(
                      surahData.data.ayahs[0].numberInSurah
                    )}
                  </span>
                ) : null}
                {surahData.data.ayahs[0].text.replace(
                  "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
                  ""
                )}
              </div>
            )}

            {surahData.data.ayahs.slice(1).map((ayah) => (
              <div key={ayah.numberInSurah} className="ayah">
                {ayah.numberInSurah > 0 && (
                  <span>{convertToArabicNumbers(ayah.numberInSurah)}</span>
                )}
                {ayah.text}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
