import React, { useEffect, useState } from "react";

type SurahData = {
  surahName: string;
  surahNameArabic: string;
  surahNameArabicLong: string;
  surahNameTranslation: string;
  revelationPlace: string;
  totalAyah: number;
  surahNo: number;
  english: string[];
  arabic1: string[];
};

const HomePage = () => {
  const convertToArabicNumbers = (num: number): string => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/\d/g, (d) => arabicNumbers[parseInt(d)]);
  };

  const [surahData, setSurahData] = useState<SurahData | null>(null);
  const [surahId, setSurahId] = useState<number>(1);
  const [hoveredAyahIndex, setHoveredAyahIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://quranapi.pages.dev/api/${surahId}.json`)
      .then((response) => response.json())
      .then((data) => setSurahData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [surahId]);

  const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSurahId(Number(event.target.value));
  };

  return (
    <div className="layout">
      {surahData ? (
        <div className="page">
          <div className="header">
            <div className="d-flex gap-2 right-header">
              <p className="surahEnglishName">
                {surahData.surahNameTranslation}
              </p>
              <select
                value={surahId}
                onChange={handleSurahChange}
                className="btn SelectBox"
              >
                {Array.from({ length: 114 }, (_, index) => index + 1).map(
                  (id) => (
                    <option key={id} value={id}>
                      Surah {id}
                    </option>
                  )
                )}
              </select>
            </div>

            <p className="surahArabicLongName">
              {surahData.surahNameArabicLong}
            </p>
          </div>

          <div
            className="surah"
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              direction: "rtl",
            }}
          >
            {surahData.arabic1.length > 0 && (
              <div className="arabic1">
                <h2 className="bismillah">بسم الله الرحمن الرحيم</h2>
                {surahData.arabic1.map((text, index) => (
                  <div
                    key={index}
                    className="ayah"
                    style={{ textAlign: "right", position: "relative" }}
                    onClick={() => setHoveredAyahIndex(index)}
                    onMouseLeave={() => setHoveredAyahIndex(null)}
                  >
                    {text}
                    <span>{convertToArabicNumbers(index + 1)}</span>

                    {hoveredAyahIndex === index && surahData.english[index] && (
                      <div className="ayahTranslatePopup">
                        {surahData.english[index]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
