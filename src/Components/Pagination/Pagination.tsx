import React from "react";
import "./pagination.css";
import { Link } from "react-router-dom";
import { SurahData } from "../../API/SurahModel";
import TurkishNameAPI from "../../API/TurkishNameAPI";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type Props = {
  surahId: number;
  setSurahId: (id: number) => void;
  surahData: SurahData;
};

const Pagination = ({ surahId, setSurahId, surahData }: Props) => {
  const prevSurahId = surahId > 1 ? surahId - 1 : null;
  const nextSurahId = surahId < 114 ? surahId + 1 : null;

  const prevSurahNameTR = prevSurahId
    ? TurkishNameAPI.find((surah) => surah.id === prevSurahId)?.turkishName || "Önceki Sûre"
    : "İlk Sûre";

  const nextSurahNameTR = nextSurahId
    ? TurkishNameAPI.find((surah) => surah.id === nextSurahId)?.turkishName || "Sonraki Sûre"
    : "Son Sûre";

  return (
    <div className="pagination">
     
      <Link
        type="button"
        className={`btn pagination-btn ${prevSurahId === null ? "disabled" : ""}`}
        to={prevSurahId !== null ? `/surah/${prevSurahId}` : "#"}
        onClick={(e) => {
          if (prevSurahId === null) e.preventDefault(); 
          else setSurahId(prevSurahId);
        }}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
        {prevSurahNameTR}
      </Link>

    
      <Link to="" type="button" className="liar-btn">{surahData.surahNameTurkish}</Link>

    
      <Link
        type="button"
        className={`btn pagination-btn ${nextSurahId === null ? "disabled" : ""}`}
        to={nextSurahId !== null ? `/surah/${nextSurahId}` : "#"}
        onClick={(e) => {
          if (nextSurahId === null) e.preventDefault(); 
          else setSurahId(nextSurahId);
        }}
      >
        {nextSurahNameTR}
        <MdOutlineKeyboardDoubleArrowRight />
      </Link>
    </div>
  );
};

export default Pagination;
