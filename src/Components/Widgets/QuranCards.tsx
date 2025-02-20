import React, { useState } from "react";
import "./widget.css";
import { Link } from "react-router-dom";
import { IoFlowerOutline } from "react-icons/io5";
import { IoMdFlower } from "react-icons/io";
import { BsFlower1 } from "react-icons/bs";
import { LuFlower } from "react-icons/lu";
import { GiFlowerEmblem } from "react-icons/gi";
import { GrNext, GrPrevious } from "react-icons/gr";

type Props = {};

const QuranCards = (props: Props) => {
  const ShortSurahList = [
    { id: 1, title: "Fatiha", icon: <IoMdFlower /> },
    { id: 89, title: "Fecr", icon: <GiFlowerEmblem /> },
    { id: 91, title: "Şems", icon: <IoFlowerOutline /> },
    { id: 92, title: "Leyl", icon: <BsFlower1 /> },
    { id: 93, title: "Duhâ", icon: <LuFlower /> },
    { id: 94, title: "İnşirah", icon: <IoMdFlower /> },
    { id: 95, title: "Tin", icon: <GiFlowerEmblem /> },
    { id: 96, title: "Alâk", icon: <IoFlowerOutline /> },
    { id: 97, title: "Kadir", icon: <BsFlower1 /> },
    { id: 98, title: "Beyyine", icon: <LuFlower /> },
    { id: 99, title: "Zilzal", icon: <IoMdFlower /> },
    { id: 100, title: "Adiyat", icon: <IoFlowerOutline /> },
    { id: 101, title: "Kâria", icon: <GiFlowerEmblem /> },
    { id: 102, title: "Tekasür", icon: <LuFlower /> },
    { id: 103, title: "Asr", icon: <BsFlower1 /> },
    { id: 104, title: "Humeze", icon: <IoMdFlower /> },
    { id: 105, title: "Fil", icon: <GiFlowerEmblem /> },
    { id: 106, title: "Kureyş", icon: <IoFlowerOutline /> },
    { id: 107, title: "Ma'un", icon: <BsFlower1 /> },
    { id: 108, title: "Kevser", icon: <IoFlowerOutline /> },
    { id: 109, title: "Kâfirûn", icon: <IoMdFlower /> },
    { id: 110, title: "Nasr", icon: <GiFlowerEmblem /> },
    { id: 111, title: "Tebbet", icon: <IoFlowerOutline /> },
    { id: 112, title: "İhlâs", icon: <BsFlower1 /> },
    { id: 113, title: "Felâk", icon: <IoFlowerOutline /> },
    { id: 114, title: "Nâs", icon: <IoMdFlower /> },
  ];
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(ShortSurahList.length / itemsPerPage);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const displayedSurahs = ShortSurahList.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage
  );
  return (
    <div className="quran-cards d-flex">
      <div className="short__surah layout">
        <div className="header">
          <p>Kısa Sûreler</p>
        </div>
        <div className="content">
          {displayedSurahs.map((s) => (
            <div className="card" key={s.id}>
              <div className="card__title">
                <p>{s.title} Sûresi</p>
              </div>
              <div className="card__content">
                <Link to={`/surah/${s.id}`}>{s.icon}</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="footer d-flex">
          <button
            title="GERİ"
            className="btn pagination"
            onClick={handlePrev}
            disabled={page === 0}
          >
            <GrPrevious />
          </button>
          <span>
            {page + 1} / {totalPages}
          </span>
          <button
            title="İLERİ"
            className="btn pagination"
            onClick={handleNext}
            disabled={page === totalPages - 1}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuranCards;
