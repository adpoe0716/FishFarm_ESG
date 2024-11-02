import React, { useState } from "react";
import "./VideoCircles.css";

const VideoCircles = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const playVideo = (filePath) => {
    setVideoSrc(filePath);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setVideoSrc("");
  };

  return (
    <div className="video-circle-container">
      <svg height="100%" width="100%">
        <line className="line" x1="50%" y1="50%" x2="50%" y2="20%" />
        <line className="line" x1="50%" y1="50%" x2="25%" y2="50%" />
        <line className="line" x1="50%" y1="50%" x2="75%" y2="50%" />
        <line className="line" x1="50%" y1="50%" x2="35%" y2="80%" />
        <line className="line" x1="50%" y1="50%" x2="65%" y2="80%" />
      </svg>

      <div
        className="circle circle-1"
        onClick={() => playVideo("/video/video1.mp4")}
      >
        漁電共生
      </div>
      <div
        className="circle circle-2"
        onClick={() => playVideo("/video/video2.mp4")}
      >
        蛋白質
      </div>
      <div
        className="circle circle-3"
        onClick={() => playVideo("/video/video3.mp4")}
      >
        海洋藍碳
      </div>
      <div
        className="circle circle-4"
        onClick={() => playVideo("/video/video4.mp4")}
      >
        飼料
      </div>
      <div
        className="circle circle-5"
        onClick={() => playVideo("/video/video5.mp4")}
      >
        生態養殖
      </div>

      {overlayVisible && (
        <div className="overlay">
          <div className="video-container">
            <video width="600" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              您的瀏覽器不支持播放此視頻。
            </video>
            <button className="close-button" onClick={closeOverlay}>
              關閉
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCircles;
