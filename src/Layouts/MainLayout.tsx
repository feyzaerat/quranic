import React, { useRef } from "react";
import Router from "../Routers/Router";
import { Footer, Navbar, Sidebar } from "../Components";
import "./layout.css";
type Props = {};

const MainLayout = (props: Props) => {
  
  return (
    <>
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div>
        <Router/>
        <Footer/>
        </div>
        
      </div>
     
    </>
  );
};

export default MainLayout;
