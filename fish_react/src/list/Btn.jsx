import React, { useState } from "react";
import { Button, Modal, Input } from "antd";
import { SendOutlined, CloseOutlined } from "@ant-design/icons";
import "./Btn.css";

const Btn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 控制懸浮視窗顯示和隱藏
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 處理問題並生成對應的回應
  const generateResponse = (question) => {
    let response = "";
  
    switch (question.trim()) {
      case "魚塭養殖碳排放的主要來源比例最高的是什麼？如何協助養殖戶減少這些排放？":
        response =
          `魚塭養殖碳排放的主要來源比例最高的是飼料的消耗。\n\n` +
          `協助養殖戶減少碳排放可以通過多種方式實現。首先，可以提高飼料生產的透明度，並制定減少溫室氣體排放的目標。例如，嘉吉公司的SeaFurther Sustainability專案旨在幫助農民在2030年前至少將其環境碳足跡減少30%。此外，提供測量碳足跡和其他環境影響的實踐服務或工具，如Sustell，可以對減少碳排放具有重大意義。\n\n` +
          `養殖戶還可以在價值鏈的各個環節，包括加工和運輸方面，採取更多措施來減少溫室氣體排放。展示更環保的產品也能幫助消費者做出更明智的決定，從而在長遠來看影響整個價值鏈，使其更具環境意識。`;
        break;
  
      case "如何優化餵食時間以最大化魚類生長並減少浪費？":
        response =
          `優化魚類餵食時間和策略可以顯著促進魚類生長並減少飼料浪費。以下是一些具體的建議：\n\n` +
          `1. **精確控制餵食時間和餵食量**：確保魚類在最佳時間攝取足夠的營養，這樣可以提高生長速度並減少殘餘飼料的產生，降低水體污染，進一步改善養殖環境的水質。\n\n` +
          `2. **使用植物性飼料**：傳統的魚飼料大多來自海洋捕撈的小型魚種，這不僅影響海洋資源的可持續性，還可能導致飼料浪費。改用植物性飼料並將養殖場設置在溫度較高的區域，可以大幅降低碳排放，並可能提高飼料利用效率，減少浪費。\n\n` +
          `這些策略不僅有助於提高魚類的生長速度，還能有效減少飼料浪費，達到環境和經濟效益的雙贏。`;
        break;
  
      default:
        response = "很抱歉，無法識別您的問題，請嘗試提出具體的問題。";
    }
  
    return response;
  };
  

  // 發送訊息
  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: "user", text: inputValue }]);
      const systemResponse = generateResponse(inputValue);
      setInputValue("");

      // 系統回應
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "system", text: systemResponse },
        ]);
      }, 3000);
    }
  };

  return (
    <>
      <Button
        className="floating-btn"
        onClick={showModal}
        shape="circle"
        icon={<img src="/img/but.png" alt="Chat Icon" />}
      />

      <Modal
        title="淨零養殖小助手"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        className="chat-modal"
        closeIcon={<CloseOutlined />}
      >
        <div className="chat-window">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.type === "user" ? "user-message" : "system-message"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* 聊天輸入框 */}
        <div className="chat-input">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={sendMessage}
            placeholder="輸入訊息..."
          />
          <Button
            type="primary"
            onClick={sendMessage}
            icon={<SendOutlined />}
          />
        </div>
      </Modal>
    </>
  );
};

export default Btn;
