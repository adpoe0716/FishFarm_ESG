import React from 'react';
import { Row, Col, Card } from 'antd';
import { UserOutlined, CloudOutlined, FireOutlined, ExperimentOutlined , ShoppingOutlined, RiseOutlined  } from '@ant-design/icons';

const ESGCard = ({v1,v2,v3,v4}) => {
  const cardsData = [
    { icon: <CloudOutlined style={{ fontSize: '24px', color: '#1890ff' }} />, value: v1, label: '碳排放總量 (kg)' },
    { icon: <ShoppingOutlined  style={{ fontSize: '24px', color: '#ff4d4f' }} />, value: v2, label: '飼料剩餘量 (kg)' },
    { icon: <ExperimentOutlined style={{ fontSize: '24px', color: '#faad14' }} />, value: v3, label: '再生能源使用' },
    { icon: <RiseOutlined  style={{ fontSize: '24px', color: '#52c41a' }} />, value: v4, label: '與上個月相比' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* 上下排列 */}
      <Row gutter={[0, 8]} style={{ flexDirection: 'column', height: '100%' }}>
        {cardsData.map((card, index) => (
          <Col span={24} key={index} style={{ flex: 1 }}> {/* 每個卡片佔據剩餘的等高空間 */}
            <Card
              bordered={false}
              style={{ borderRadius: '10px', boxShadow: '0 4px 2px rgba(0, 0, 0, 0.5)', textAlign: 'center', height: '100%' }} 
            >
              <div>{card.icon}</div>
              <h2>{card.value}</h2>
              <p>{card.label}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ESGCard;
