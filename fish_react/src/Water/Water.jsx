import React from "react";
import { Row, Col, Layout ,Typography} from "antd";
import Sidebar from "../Dash/Sidebar";
import Water_quality from "./Water_quality";
import Release_fry from './Release_fry';
import Algae from './Algae';
import To from './To';
import './Water.css';

const { Content } = Layout;
const { Paragraph } = Typography;

const Water = ({ num }) => {
    return (
        <div style={{ display: 'flex' }}>
          <Sidebar num={num} />
          <Layout style={{ flex: 1, minHeight: "100vh", backgroundColor: "#E1F5FE" }}>
            <Content style={{ margin: "24px", backgroundColor: "#E1F5FE" }}>
              <Row gutter={12}>
                <Col span={7}>
                  <div className="water-quality-card">
                  <Paragraph strong style={{ fontSize: "32px" }}>水質狀況</Paragraph>
                    <Water_quality />
                  </div>
                </Col>
                <Col span={[10]}>
                  <div className="release-fry-card">
                  <Paragraph strong style={{ fontSize: "32px" }}>水質時間序</Paragraph>
                    <Release_fry />
                  </div>
               
                </Col>
                <Col span={7}>
                  <div className="water-quality-card">
                  <Paragraph strong style={{ fontSize: "32px" }}>藻類覆蓋</Paragraph>
                    <Algae />
                  </div>
                </Col>
              </Row>
            </Content>
          </Layout>
        </div>
      );
};

export default Water;
