import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, SurahList, SurahSingle } from "../Pages";

type Props = {};

const Router = () => {
  return (
    <div className="router-content w-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/surah" element={<SurahList />} />
        <Route path="/surah/:surahId" element={<SurahSingle />} />
      </Routes>
    </div>
  );
};

export default Router;
