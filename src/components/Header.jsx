import React, { useState, useEffect } from "react";
import "../static/styles/headerStyles.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState({
    h1: false,
    h2: false,
    p: false,
  });

  useEffect(() => {
    const showHeaderTimeout = setTimeout(() => {
      setShowHeader((prevState) => ({ ...prevState, h1: true }));
    }, 500);

    const showH2Timeout = setTimeout(() => {
      setShowHeader((prevState) => ({ ...prevState, h2: true }));
    }, 1000);

    const showPTimeout = setTimeout(() => {
      setShowHeader((prevState) => ({ ...prevState, p: true }));
    }, 1500);

    return () => {
      clearTimeout(showHeaderTimeout);
      clearTimeout(showH2Timeout);
      clearTimeout(showPTimeout);
    };
  }, []);

  return (
    <div className="headerDiv">
      <div className="contactMe"></div>
      <div className="textHeader">
        <div className="centerDivText">
          <h1 className={`fade-in ${showHeader.h1 ? 'visible' : ''}`}>MartinFitS</h1>
          <h2 className={`fade-in ${showHeader.h2 ? 'visible' : ''}`}>SOFTWARE ENGINEER STUDENT</h2>
          <p className={`fade-in ${showHeader.p ? 'visible' : ''}`}>Get to know me more, swipe a little:)</p>
          <div className={`drawToDown fade-in ${showHeader.p ? 'visible' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
