import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import AIVideo from "./AIVideo";
import Video from './VideoCircles';
import "./SeafoodGuide.css";

const SeafoodGuide = () => {
  const [expanded, setExpanded] = useState(false);
  const [showAIVideo, setShowAIVideo] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const toggleAIVideo = () => {
    setShowAIVideo(!showAIVideo);
  };

  return (
    <div className="main-container">
      <section className="white-section">
        <h2>永續發展與漁業保護</h2>
        <div className={`text-content ${expanded ? "expanded" : "collapsed"}`}>
          <p>
            臺灣為四面環海的國家，漁業儼然為不可或缺的產業。達成良好的漁業永續發展不僅可以確保漁業的長期生存，還帶來長期的經濟效益。
            <br />
            <br />
            隨著漁船機械化、氣候變遷等挑戰，養殖漁業對於環境的影響主要體現在水質管理、生態保護及土地利用上...
          </p>
        </div>
        <Button
          type="text"
          onClick={toggleText}
          icon={expanded ? <UpOutlined /> : <DownOutlined />}
        >
          {expanded ? "" : ""}
        </Button>
      </section>
      <section className="video-section">
        <Video />
      </section>
      <Button className="fixed-button" type="primary" onClick={toggleAIVideo}>
        AI教育助手
      </Button>
      {showAIVideo && <AIVideo onClose={toggleAIVideo} />}
    </div>
  );
};

export default SeafoodGuide;
