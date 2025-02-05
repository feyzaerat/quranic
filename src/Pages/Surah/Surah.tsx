import React, { useEffect, useRef, useState } from "react";
import { SurahData } from "../../API/SurahModel";
import "./surah.css";
import { ScrollTop } from "../../Components";
type Props = {
  surahData: SurahData;
};

const Surah = ({ surahData }: Props) => {
  const [hoveredAyahIndex, setHoveredAyahIndex] = useState<number | null>(null);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  const convertToArabicNumbers = (num: number): string => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/\d/g, (d) => arabicNumbers[parseInt(d)]);
  };

  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }

    const handleScroll = () => {
      if (scrollableRef.current) {
        const scrollTopValue = scrollableRef.current.scrollTop;
        setIsScrollTopVisible(scrollTopValue > 500);
      }
    };

    const scrollableDiv = scrollableRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        className="surah"
        ref={scrollableRef}
        style={{
          display: "flex",
        }}
      >
        {surahData && surahData.arabic1.length > 0 && (
          <div
            className="arabic1"
            style={{ flexDirection: "column-reverse", direction: "rtl" }}
          >
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
        {isScrollTopVisible && <ScrollTop scrollableRef={scrollableRef} />}
      </div>
    </>
  );
};

export default Surah;
