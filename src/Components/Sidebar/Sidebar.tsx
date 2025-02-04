import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Surah from "../Surah/Surah";
import { Form } from "react-bootstrap";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="layout sidebar">
      <div className="sidebar-header">
        <div className="title">
          <p>Al-Faatiha</p>
        </div>
        <div className="sidebar-nav">
          <Link to="">Surah</Link>
          <Link to="">Page</Link>
          <Link to="">Juz</Link>
        </div>
        <div className="sidebar-search">
          <Form>
            <Form.Group className="" controlId="formBasicSearch">
              <Form.Control type="text" placeholder="Search .." />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="sidebar-content">
        <Surah />
      </div>
    </div>
  );
};

export default Sidebar;
