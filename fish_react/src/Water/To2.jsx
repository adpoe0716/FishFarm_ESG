import React, { useState } from "react";
import "../Dash/Todo.css";

export default function Todo() {
  // `popupType` 是一個包含多種類型的陣列，例如 ["success", "alert"]
  const [popupType, setPopupType] = useState(["alert"]);

  // 根據每個 `popupType` 類型來渲染對應的彈出窗口
  const renderPopup = (type) => {
    switch (type) {
      case "success":
        return (
          <div className="popup success-popup">
            <div className="popup-icon success-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="success-svg"
              >
                <path
                  fillRule="evenodd"
                  d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="success-message">目前狀況良好!</div>
            <div
              className="popup-icon close-icon"
              onClick={() => removePopup(type)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="close-svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  className="close-path"
                />
              </svg>
            </div>
          </div>
        );
      case "alert":
        return (
          <div className="popup alert-popup">
            <div className="popup-icon alert-icon">
              <svg
                className="alert-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="alert-message">警告！藻類覆蓋面積已過高。</div>
            <div
              className="popup-icon close-icon"
              onClick={() => removePopup(type)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="close-svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  className="close-path"
                />
              </svg>
            </div>
          </div>
        );
      case "error":
        return (
          <div className="popup error-popup">
            <div className="popup-icon error-icon">
              <svg
                className="error-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="error-message">錯誤！水溫太高了 建議啟動抽水機12分鐘 預估水溫可以降至30度。</div>
            <div
              className="popup-icon close-icon"
              onClick={() => setPopupType(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="close-svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  className="close-path"
                />
              </svg>
            </div>
          </div>
        );
      case "info":
        return (
          <div className="popup info-popup">
            <div className="popup-icon info-icon">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="info-svg"
              >
                <path
                  clipRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <div className="info-message">信息！明天傍晚會下大暴雨 請提前洩洪。</div>
            <div
              className="popup-icon close-icon"
              onClick={() => setPopupType(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="close-svg"
              >
                <path
                  d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                  className="close-path"
                />
              </svg>
            </div>
          </div>
        );
      // 可以添加更多的情況，例如 "error" 或 "info"
      default:
        return null;
    }
  };

  // 移除指定類型的彈出窗口
  const removePopup = (type) => {
    setPopupType((prev) => prev.filter((popup) => popup !== type));
  };

  return (
    <div className="popup-container">
      {popupType.map((type) => (
        <div key={type}>{renderPopup(type)}</div>
      ))}
    </div>
  );
}
