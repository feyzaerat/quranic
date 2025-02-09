import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="layout footer d-flex">
      <p>
        &copy; {currentYear}{" "}
        <Link
          className="colorful-text"
          to="https://feyzaerat.com.tr"
          target="_blank"
          rel="noopener noreferrer"
        >
          FKE Software.
        </Link>{" "}
        <i className="disabled">All rights reserved.</i>
      </p>
    </div>
  );
};

export default Footer;
