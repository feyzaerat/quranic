import React, { useEffect, useRef, useState } from "react";

import { SurahData } from "../../API/SurahModel";
import TranslateData from "../../API/TranslateModel";

import { ScrollTop } from "..";

import { TbZoomInFilled, TbZoomOutFilled } from "react-icons/tb";
import "./surah.css";

type Props = {
  surahData: SurahData;
  translateData: TranslateData;
};

const Surah = ({ surahData, translateData }: Props) => {
  const [hoveredAyahIndex, setHoveredAyahIndex] = useState<number | null>(null);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [fontScale, setFontScale] = useState(1);

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

  const increaseFontSize = () => {
    if (fontScale < 2) {
      const newScale = fontScale + 0.1;
      setFontScale(newScale);
      document.documentElement.style.setProperty(
        "--font-scale",
        newScale.toString()
      );
    }
  };

  const decreaseFontSize = () => {
    if (fontScale > 0.75) {
      const newScale = fontScale - 0.1;
      setFontScale(newScale);
      document.documentElement.style.setProperty(
        "--font-scale",
        newScale.toString()
      );
    }
  };

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
            className="surah-page"
            style={{ flexDirection: "column-reverse", direction: "rtl" }}
          >
            <div className="sub-header">
              <div className="btn-row">
                <button title="Büyüt" type="button" onClick={increaseFontSize}>
                  <TbZoomInFilled />
                </button>
                <button title="Küçült" type="button" onClick={decreaseFontSize}>
                  <TbZoomOutFilled />
                </button>
              </div>
              <h2 className="bismillah">بسم الله الرحمن الرحيم</h2>
            </div>
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

                {hoveredAyahIndex === index &&
                  translateData.chapter &&
                  translateData.chapter[index].text && (
                    <div className="ayahTranslatePopup">
                      {translateData.chapter[index].text}
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
