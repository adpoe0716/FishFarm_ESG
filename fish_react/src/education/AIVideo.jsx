import React, { useState, useEffect } from 'react';
import { Modal, Input, Button, List, Spin, Typography } from 'antd';
import './AIVideo.css';

const { Text } = Typography;

const AIVideo = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  const [showVideo, setShowVideo] = useState(false); 

  useEffect(() => {
    setMessages([{ type: "system", text: "有問題直接問，我用影片回答你!" }]);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { type: "user", text: inputValue }]);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "system", text: "影片製作中..." }
        ]);
      }, 500);

      setInputValue(""); 
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setShowVideo(true); 
      }, 2000); 
    }
  };

  return (
    <Modal
      title="AI Video"
      visible={true}
      onCancel={onClose}
      footer={null}
      width="90%"
      bodyStyle={{ display: 'flex', flexDirection: 'row' }}
    >
      <div style={{ flex: 2 }}>
        {/* Loading 或 影片顯示 */}
        {isLoading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin tip="Loading..." />
          </div>
        ) : (
          showVideo && (
            <video controls style={{ width: '100%', maxHeight: '80vh' }}>
              <source src="/video/AI.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        )}
      </div>

      <div style={{ flex: 1, marginLeft: '20px', backgroundColor: '#b3e5fc', padding: '10px' }}>
        <List
          dataSource={messages}
          renderItem={(item) => (
            <List.Item
              style={{
                justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start',
                display: 'flex',
              }}
            >
              <Text
                style={{
                  backgroundColor: item.type === 'user' ? '#4CAF50' : '#e0e0e0',
                  color: item.type === 'user' ? '#fff' : '#000',
                  padding: '10px',
                  borderRadius: '10px',
                  maxWidth: '70%',
                }}
              >
                {item.text}
              </Text>
            </List.Item>
          )}
          style={{ height: '70vh', overflowY: 'auto', backgroundColor: '#b3e5fc', padding: '10px', borderRadius: '5px' }}
        />

        <div style={{ marginTop: '10px', display: 'flex' }}>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="輸入您的訊息..."
            style={{ flexGrow: 1 }}
          />
          <Button type="primary" onClick={handleSend} style={{ marginLeft: '10px' }}>
            傳送
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AIVideo;
