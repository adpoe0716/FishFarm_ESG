import React from 'react';
import './ESGReport.css';
// import esgImage from 'fish_react\public\img\ESG1.png'; // Update with the correct path to your image

const ESGReport = () => {
  return (
    <div className="esg-report-container">
      <div className="esg-text-container">
        <h1>雲林永續魚塭年度ESG永續報告書</h1>
        <p>
          歡迎閱讀雲林永續魚塭的年度ESG永續報告書。我們位於台灣雲林縣，擁有6000平方米的養殖面積，
          主要養殖鼠目魚、草蝦和文蛤。作為一家致力於永續發展的水產養殖企業，我們的目標是年產量達到
          150噸，同時堅持環境友好的經營理念。
        </p>
        <p>
          本報告將詳細介紹我們在環境保護、資源利用、生物多樣性維護、員工福利及財務管理等方面的努力和
          成果。我們相信，透過這份報告，您將深入了解我們如何在追求經濟效益的同時，也為社會和環境做出
          積極貢獻。
        </p>
        <div className="author-info">
          <span>by 安安</span>
        </div>
      </div>
      <div className="esg-image-container">
        {/* <img src={"fish_react\public\img\ESG1.png"} alt="ESG Fish Farm" className="esg-image" /> */}
      </div>
    </div>
  );
};

export default ESGReport;
