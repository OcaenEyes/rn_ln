import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
// import "./index.less";
// import "../themes/custome-theme.less";
import "../themes/custom-dark.css";
import "../themes/custom-default.css";
import React, { useState } from "react";
import { ConfigProvider, Layout, Menu, Space, Switch } from "antd";
const { Header, Sider, Content, Footer } = Layout;

const FronEnd = () => {
  const [prefix, setPrefix] = useState("custom-default");
  const [changeStatus, setChangeStatus] = useState(true);

  const changeTheme = () => {
    if (prefix === "custom-default") {
      setPrefix("custom-dark");
      setChangeStatus(!changeStatus);
    }
    if (prefix === "custom-dark") {
      setPrefix("custom-default");
      setChangeStatus(!changeStatus);
    }
  };

  return (
    <ConfigProvider prefixCls={prefix}>
      <Layout className={`site-layout ${prefix} `} style={{ height: "100%" }}>
        <Sider className="site-slider" breakpoint="lg" collapsedWidth="0">
          <Menu
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
        <Layout className="site-layout-content">
          <Header
            className="site-head"
            style={{
              padding: "0 18px 0 18px",
            }}
          >
            <Space>
              <Switch
                checkedChildren="🌞"
                unCheckedChildren="🌜"
                checked={changeStatus}
                onClick={changeTheme}
              />
            </Space>
          </Header>
          <Content
            className="site-content"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
          <Footer className="site-foot" style={{ textAlign: "center" }}>
            OCEAN GZY
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default FronEnd;
