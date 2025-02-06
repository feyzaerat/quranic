import React from "react";
import { SurahData } from "../../API/SurahModel";
import "./header.css"

type Props = {
  surahId: number;
  setSurahId: (id: number) => void;
  surahData: SurahData;
};

const Header = ({ surahId, setSurahId, surahData }: Props) => {
  const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSurahId(Number(event.target.value));
  };

  return (
    <div className="header">
      <div className="d-flex gap-2 right-header">
        <p className="surahEnglishName">{surahData.surahNameTurkish}</p>
        <select
          title="Sûre Seç"
          value={surahId}
          onChange={handleSurahChange}
          className="btn SelectBox"
        >
          {Array.from({ length: 114 }, (_, index) => index + 1).map((id) => (
            <option key={id} value={id}>
               {id}. Sûre
            </option>
          ))}
        </select>
      </div>

      <p className="surahArabicLongName">{surahData.surahNameArabicLong}</p>
    </div>
  );
};

export default Header;
