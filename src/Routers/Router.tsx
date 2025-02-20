import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SurahList, SurahSingle } from "../Pages";

const Router: React.FC = () => {
  return (
    <div className="router-content w-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah" element={<SurahList />} />
          <Route path="/surah/:surahId" element={<SurahSingle />} />
          <Route path="*" element={<Home />} />
        </Routes>
      
    </div>
  );
};

export default Router;
