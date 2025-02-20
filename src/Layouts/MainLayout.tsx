import React, { useRef } from "react";

import { Footer, Navbar, Sidebar } from "../Components";
import "./layout.css";
import Router from "../Routers/Router";
type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <Router />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
