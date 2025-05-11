import React, { useState, useEffect } from "react";
import "../static/styles/MyPresentation.css";
import resumePDF from "../static/CurriculumMartin.pdf";
import yo from "../static/images/MartinPhoto1.png";
import yodos from "../static/images/MartinPhoto2.png";

const MyPresentation = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [yo, yodos];

  const openPDF = () => {
    window.open(resumePDF, "_blank");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="cardPresentation">
      <div className="cardPresentationPhotosDiv">
        <div className="imagesDiv">
          <img src={images[imageIndex]} alt="" />
        </div>
      </div>
      <div className="textCard">
        <h4>ABOUT ME!</h4>
        <h2>Hi, I'm Martín</h2>
        <p>
       I am a sixth-semester Software Engineering student, currently 21 years old, with one year of professional experience focused on backend development and database management.

I consider myself a proactive individual with a strong ability to quickly learn new technologies. I have a solid command of English, which allows me to communicate effectively in technical and collaborative environments.

I am looking to continue growing professionally by contributing my skills and knowledge to challenging projects that support my development as both a software engineer and a technology professional.

        </p>

        <button onClick={openPDF}>R E S U M E</button>
      </div>
    </div>
  );
};

export default MyPresentation;
