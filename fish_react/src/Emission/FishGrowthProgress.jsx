import React, { useState } from 'react';
import { Progress, Tooltip, Row, Col, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const FishGrowthProgress = () => {
  const [currentProgress, setCurrentProgress] = useState(10); // 初始進度

  // 根據圖片的虱目魚成長階段
  const growthStages = [
    { stage: '魚苗期', percentage: 20, description: '1.5個月 (4/1 - 5/15)' },
    { stage: '成長期', percentage: 50, description: '2個月 (5/16 - 7/19)' },
    { stage: '成魚期', percentage: 100, description: '6-7個月 (7/20 - 2/30)' }
  ];

  // 模擬成長進度更新
  const handleProgressUpdate = () => {
    if (currentProgress < 100) {
      const nextStage = growthStages.find(stage => stage.percentage > currentProgress);
      if (nextStage) {
        setCurrentProgress(nextStage.percentage);
      }
    }
  };

  return (
    <div > 
      <Row justify="space-between" align="middle" style={{ marginBottom: '10px' }}> {/* 減少標題與按鈕的margin */}
        <h2 style={{ color: '#1890ff', margin: 0, fontSize: '24px' }}>虱目魚生長週期進度</h2> {/* 減小字體 */}
        {/* <Button size="small" onClick={handleProgressUpdate} disabled={currentProgress === 100}>
          {currentProgress < 100 ? '模擬成長進度' : '已達成魚階段'}
        </Button> */}
      </Row>

      {/* 橫向進度條 */}
      <Row justify="center" style={{ marginBottom: '10px' }}> {/* 減少進度條與其他內容的間距 */}
        <Col>
          <Progress
            percent={currentProgress}
            strokeLinecap="square"
            strokeColor="#52c41a"
            trailColor="#d9d9d9"
            showInfo={false}
            style={{ width: '1000px', height: '4px' }} 
          />
        </Col>
      </Row>

      {/* 時間序與重要節點顯示 */}
      <Row justify="space-between" style={{ width: '1000px', margin: '0 auto' }}>
        {growthStages.map((stage, index) => (
          <Col key={index}>
            <Tooltip title={stage.description}>
              <div style={{ textAlign: 'center', fontSize: '12px' }}> {/* 減小時間節點的字體 */}
                <InfoCircleOutlined
                  style={{
                    fontSize: '20px',  // 減小icon的大小
                    color: stage.percentage <= currentProgress ? '#52c41a' : '#d9d9d9',
                    cursor: 'pointer'
                  }}
                />
                <div>{stage.stage}</div>
              </div>
            </Tooltip>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FishGrowthProgress;
