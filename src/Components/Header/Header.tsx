import React, { useEffect, useState } from "react";
import { SurahData } from "../../API/SurahModel";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { GiVineFlower } from "react-icons/gi";
<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
type Props = {
  surahId: number;
  setSurahId: (id: number) => void;
  surahData: SurahData;
};

const Header = ({ surahId, setSurahId, surahData }: Props) => {
  const navigate = useNavigate();
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [selectedReciter, setSelectedReciter] = useState<number>(3);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (surahData?.audio[selectedReciter]?.url) {
      setAudioUrl(surahData.audio[selectedReciter].url);
    }
  }, [surahData, selectedReciter, surahId]);

  const handleSurahChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSurahId = parseInt(event.target.value, 10);
    setSurahId(newSurahId);
    navigate(`/surah/${newSurahId}`);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleReciterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const reciterId = parseInt(event.target.value, 1);
    setSelectedReciter(reciterId);
  };

  return (
    <div className="header">
      <div className="d-flex gap-2 right-header">
        <select
          title="Okuyucu Seç"
          value={selectedReciter}
          onChange={handleReciterChange}
          className="btn SelectBox"
        >
          {Object.keys(surahData.audio).map((reciterId) => (
            <option key={reciterId} value={reciterId}>
              {surahData.audio[parseInt(reciterId)].reciter}
            </option>
          ))}
        </select>
        {audioUrl && (
          <audio ref={audioRef} controls key={audioUrl} id="player">
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
        {/*<select
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
        </select>*/}
      </div>
      <div className="d-flex left-header">
        <p className="surahArabicLongName">
          <span>{surahData.surahNameArabicLong}</span>
          <span>
            {" "}
            <GiVineFlower />
          </span>
        </p>
        <p className="surahEnglishName">{surahData.surahNameTurkish}</p>
      </div>
    </div>
  );
};

export default Header;
