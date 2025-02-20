import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import "./scrollTop.css";

type Props = {};

type ScrollTopProps = {
  scrollableRef: React.RefObject<HTMLDivElement | null>;
};

const ScrollTop: React.FC<ScrollTopProps> = ({ scrollableRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableRef.current) {
        setIsVisible(scrollableRef.current.scrollTop > 100);
      }
    };
    const scrollableDiv = scrollableRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrollableRef]);

  const scrollUp = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="scrollTopBtnContainer">
      {isVisible && (
        <button title="Başa Dön" type="button" className="btn" onClick={scrollUp}>
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
