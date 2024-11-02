import React, { useState } from "react";
import { Button, Divider } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./Card.css";

const CustomCard = ({ pow, wat }) => {
  const [isRunning, setIsRunning] = useState(false); // 抽水機運作狀態

  // 切換抽水機的運作狀態
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className={`card ${isRunning ? "running" : ""}`}>
      <div className="card-content">
        {/* 總電量部分，不帶開關 */}
        <div className="card-top">
          <div className="card-icon-wrapper">
            <svg
              width="48"
              viewBox="0 -960 960 960"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#F7D358" // 黃色圖標
            >
              <path d="m393-165 279-335H492l36-286-253 366h154l-36 255Zm-73 85 40-280H160l360-520h80l-40 320h240L400-80h-80Zm153-395Z" />
            </svg>
          </div>
          <div className="card-text">
            <h2>{pow} Kwh</h2>
            <p>用電量</p>
          </div>
        </div>

        {/* 水電之間的分隔線 */}
        <Divider />

        {/* 抽水機部分，帶開關 */}
        <div className="card-bottom">
          <div className="card-icon-wrapper">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="#00BFFF" // 藍色圖標
            >
              <path
                d="M32 2C32 2 12 24.008 12 37.996C12 50.638 21.373 62 32 62C42.627 62 52 50.638 52 37.996C52 24.008 32 2 32 2Z"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="card-text">
            <h2>{wat} L</h2>
            <p>抽水量</p>
          </div>

          {/* 抽水機運作狀態，與抽水量平行排列 */}
          <div className="status-indicator">
            <PoweroffOutlined
              className={`power-icon ${isRunning ? "on" : "off"}`}
              onClick={toggleRunning} // 點擊切換運作狀態
            />
            <span>{isRunning ? "抽水機運作中" : "已關閉"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
