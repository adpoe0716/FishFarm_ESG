import React from "react";
import "./Esg.css";

const ESG = () => {
  const sections = [
    { id: 1, bgImage: "/img/ESG1.png" },
    { id: 2, bgImage: "/img/ESG2.png" },
    { id: 3, bgImage: "/img/ESG3.png" },
    { id: 4, bgImage: "/img/ESG4.png" },
    { id: 5, bgImage: "/img/ESG5.png" },
    { id: 6, bgImage: "/img/ESG6.png" },
    { id: 7, bgImage: "/img/ESG7.png" },
  ];

  return (
    <div className="esg-container">
      {sections.map((section) => (
        <div key={section.id} className="esg-section">
          <img src={section.bgImage} alt={`Section ${section.id}`} className="esg-image" />
        </div>
      ))}
    </div>
  );
};

export default ESG;
