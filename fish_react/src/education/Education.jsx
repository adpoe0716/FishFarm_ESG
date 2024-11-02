import React, { useState } from "react";
import PageFlip from "react-pageflip";
import "./Education.css";
import { Button } from "antd";
import AIVideo from "./AIVideo";

const Education = () => {
  const [showAIVideo, setShowAIVideo] = useState(false);
  const toggleAIVideo = () => {
    setShowAIVideo(!showAIVideo);
  };

  return (
    <div className="education-container">
      <PageFlip className="flip-book" width={550} height={733} showCover={true}>
        <article className="page">
          <div className="cover-page">
            <h3 className="book-title">臺灣養殖漁業</h3>
            <p className="book-subtitle">ESG淨0養殖教育推廣</p>
          </div>
        </article>

        <article className="page">
          <h3 className="page-title">論述背景</h3>
          <p className="page-content">
            臺灣為四面環海的國家，漁業儼然為不可或缺的產業，是以如何保育與管理漁業資源以達到「永續漁業」目標是無可迴避的責任。達成良好的漁業永續發展不僅可以確保漁業的長期生存，帶來長期的經濟效益，更保護我們賴以維生的環境和生態系統，以利經濟、社會和環境的多重效益。
            然而隨著漁船機械化、大型化，漁撈輔助器具的發展提升捕撈的效率，造成目前全球多數海洋魚類資源回復力趕不上捕撈的速度，因此如何永續發展養殖漁業，減緩對海洋漁業的依賴變得更加重要。
            但氣候變遷帶來的極端天氣和海平面上升對魚塭養殖業構成了重大威脅，造成嚴重的經濟損失。同時，氣溫升高和水質變化也影響了魚類的生長環境，增加了養殖的風險和成本。這些環境挑戰要求養殖業者採取更為靈活和創新的應對措施，以確保生產的穩定性。
            養殖漁業對環境的影響主要體現在水質管理、生態保護及土地利用上。魚塭建設和運營過程中，飼料使用和魚類排泄物進入水體，增加了有機物和營養鹽的含量，導致水體優養化和生態系統的破壞。此外，高密度養殖環境易於疾病傳播，這不僅對養殖業的經濟效益構成威脅，也影響著周邊自然生態系統的健康。為了緩解這些問題，台灣的養殖業者應積極採用先進的水質管理技術和生態養殖方法，通過使用生物濾池、綠藻養殖等方式，有效減少養殖過程中的污染排放，改善水質，保護生態環境。
          </p>
        </article>

        <article className="page">
          {/* <h3 className="page-title">Introduction to Aquaculture</h3> */}
          <p className="page-content">
            此外，養殖漁業也可以透過「藍碳」策略來進一步提升其環境效益。藍碳指的是海洋和沿海生態系統（如海草床、紅樹林和鹽沼）在吸收和儲存二氧化碳方面的貢獻。透過在養殖區域內或周邊種植海草床和紅樹林，不僅可以增加生態多樣性，還能有效捕捉和儲存大量的二氧化碳，減少溫室氣體排放。這樣的做法不僅有助於緩解氣候變遷的影響，還能增強養殖系統的可持續性。
            在此基礎上，綠色養殖的概念逐漸深入人心。綠色養殖強調低污染、低能耗和高效利用資源，通過採用無抗飼料、循環水系統和生態養殖技術，顯著減少對水體和土地的污染。此外，綠色養殖還強調生物多樣性保護和生態平衡，通過多物種混養和自然生態系統模擬，提高養殖系統的穩定性和可持續性。這些措施不僅有助於保護環境，還能提高魚類產品的品質和安全性，滿足消費者對綠色健康食品的需求。
            在此綠色養殖的框架下，漁電共生的概念應運而生，進一步加強了養殖業的永續發展。漁電共生指的是將魚塭與太陽能發電系統相結合，魚塭上方設置太陽能板，不僅可以有效利用太陽能進行發電，還可以為魚塭提供遮蔽，減少水溫波動對魚類生長的不利影響。此舉不僅提高了土地的利用效率，還減少了碳排放，推動了養殖業的綠色轉型。
          </p>
        </article>

        <article className="page">
          {/* <h3 className="page-title">Introduction to Aquaculture</h3> */}
          <p className="page-content">
            養殖漁業對於人們的飲食多樣性和營養健康具有重要意義。魚類提供了豐富的高質量蛋白質、必需脂肪酸和維生素，對健康有著不可替代的作用。現今在全球食品安全和營養均衡日益受到關注的情況下，養殖業如何在確保可持續發展的同時，滿足人們對安全健康食品的需求，是業界迫切需要解決的挑戰之一。為此，養殖業者應改變養殖方式，確保養殖魚類的營養價值和食品安全，並通過推廣有機養殖和生態養殖，以滿足消費者對健康食品的需求。同時，通過漁電共生的創新模式，養殖業能夠在生態、經濟和社會三個方面實現可持續發展。
          </p>
        </article>

        <article className="page">
          <h3 className="page-title">課題:魚電共生</h3>
          <div className="video-container">
            <video
              src="/video/video1.mp4"
              title="Aquaculture Video"
              controls
              className="video-frame"
            />
          </div>
        </article>

        <article className="page">
          <h3 className="page-title">課題:蛋白質</h3>
          <div className="video-container">
            <video
              src="/video/video2.mp4"
              title="Aquaculture Video"
              controls
              className="video-frame"
            />
          </div>
        </article>

        <article className="page">
          <h3 className="page-title">課題:海洋藍碳</h3>
          <div className="video-container">
            <video
              src="/video/video3.mp4"
              title="Aquaculture Video"
              controls
              className="video-frame"
            />
          </div>
        </article>

        <article className="page">
          <h3 className="page-title">課題:飼料</h3>
          <div className="video-container">
            <video
              src="/video/video4.mp4"
              title="Aquaculture Video"
              controls
              className="video-frame"
            />
          </div>
        </article>
      </PageFlip>
      <Button
        className="ai-education-button"
        type="primary"
        shape="round"
        size="large"
        onClick={toggleAIVideo}
      >
        AI教育助手
      </Button>
      {showAIVideo && <AIVideo onClose={toggleAIVideo} />}
    </div>
  );
};

export default Education;
