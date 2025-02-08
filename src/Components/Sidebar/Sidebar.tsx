import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Surah from "./SidebarSurah/SidebarSurah";
import { Form } from "react-bootstrap";
type Props = {};

const Sidebar = (props: Props) => {
  const [searchSurah, setSearchSurah] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSurah(event.target.value);
  }
  return (
    <div className="layout sidebar">
      <div className="sidebar-header">
        <div className="sidebar-nav">
          <Link to="">Sûre</Link>
          <Link to="">Cûz</Link>
        </div>
        <div className="sidebar-search">
          <Form>
            <Form.Group className="" controlId="formBasicSearch">
              <Form.Control 
              type="text" 
              placeholder="Search .." 
              value={searchSurah}
              onChange={handleSearchChange}
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="sidebar-content">
        <Surah searchSurah={searchSurah} />
      </div>
    </div>
  );
};

export default Sidebar;
