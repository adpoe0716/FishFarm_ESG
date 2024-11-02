import React from 'react';
import { Card, Progress, Row, Col } from 'antd';

const CampaignProgress = ({ fishPondData }) => {
  if (!fishPondData || fishPondData.length < 1) {
    return <p>數據不足，無法顯示</p>;
  }

  // 計算百分比，這裡可以根據實際數據範圍設置最大值來調整比例
  const max = 1000; // 假設餵食的最大值是1000
  const maxIndirectMaterials = 100; // 假設間接材料的最大值是100
  const maxPower = 600; // 假設最大電力消耗600kWh
  const maxTransportation = 200; // 假設最大運輸量200kg
  const maxWaste = 500; // 假設最大廢棄物是500kg

  // 定義顏色對應
  const colors = {
    feed: '#1890ff',
    indirect_materials: '#faad14',
    power_consumption: '#52c41a',
    transportation: '#f56c6c',
    waste: '#a52a2a',
  };

  return (
    <Card
      title={`${fishPondData[0].datetime.split('T')[0]} 的當前數據`} // 動態標題顯示當前數據的日期
      bordered={false}
      style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px' }}
    >
      <div style={{ marginBottom: '20px' }}>
        <Row align="middle" style={{ marginBottom: '10px' }}>
          <Col span={16}>
            <Progress percent={(parseFloat((fishPondData[0].feed)-(fishPondData[1].feed)) / max) * 1000} showInfo={false} strokeColor={colors.feed} />
          </Col>
          <Col span={8} style={{ color: colors.feed }}>
            Feed ({(fishPondData[0].feed)-(fishPondData[1].feed)}kg)
          </Col>
        </Row>
        <Row align="middle" style={{ marginBottom: '10px' }}>
          <Col span={16}>
            <Progress percent={(parseFloat(fishPondData[0].indirect_materials)-(fishPondData[1].indirect_materials) / max) * 0.1} showInfo={false} strokeColor={colors.indirect_materials} />
          </Col>
          <Col span={8} style={{ color: colors.indirect_materials }}>
            Indirect Materials ({(fishPondData[0].indirect_materials)-(fishPondData[1].indirect_materials)}kg)
          </Col>
        </Row>
        <Row align="middle" style={{ marginBottom: '10px' }}>
          <Col span={16}>
            <Progress percent={(parseFloat(fishPondData[0].power_consumption)-(fishPondData[1].power_consumption) / max) * 0.1} showInfo={false} strokeColor={colors.power_consumption} />
          </Col>
          <Col span={8} style={{ color: colors.power_consumption }}>
            Power Consumption ({(fishPondData[0].power_consumption)-(fishPondData[1].power_consumption)}kWh)
          </Col>
        </Row>
        <Row align="middle" style={{ marginBottom: '10px' }}>
          <Col span={16}>
            <Progress percent={(parseFloat((fishPondData[0].transportation)-(fishPondData[1].transportation)) / max) * 10000} showInfo={false} strokeColor={colors.transportation} />
          </Col>
          <Col span={8} style={{ color: colors.transportation }}>
            Transportation ({(fishPondData[0].transportation)-(fishPondData[1].transportation)}kg)
          </Col>
        </Row>
        <Row align="middle">
          <Col span={16}>
            <Progress percent={(parseFloat((fishPondData[0].waste)-(fishPondData[1].waste)) / max) * 10000} showInfo={false} strokeColor={colors.waste} />
          </Col>
          <Col span={8} style={{ color: colors.waste }}>
            Waste ({(fishPondData[0].waste)-(fishPondData[1].waste)}kg)
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default CampaignProgress;
