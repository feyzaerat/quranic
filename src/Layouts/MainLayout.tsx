import React from "react";
import Router from "../Routers/Router";
import { Navbar, Sidebar } from "../Components";
import "./layout.css";
type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Router />
      </div>
    </>
  );
};

export default MainLayout;
