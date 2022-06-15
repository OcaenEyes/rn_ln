import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.less";
// import '../themes/custome-theme.less';
import React from "react";
import { Layout, Menu } from "antd";
const { Header, Sider, Content, Footer } = Layout;
const FronEnd = () => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 18px 0 18px",
          }}
        ></Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: "center" }}>OCEAN GZY</Footer>
      </Layout>
    </Layout>
  );
};

export default FronEnd;
