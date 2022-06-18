import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./index.less";
// import "../themes/custome-theme.less";
import "../themes/custom-dark.css";
import "../themes/custom-default.css";
import React, { useState } from "react";
import { BackTop, ConfigProvider, Layout, Menu, Space, Switch } from "antd";
import { Route, Routes } from "react-router-dom";
import CustomeRoutes from "../../routes/router";
const { Header, Sider, Content, Footer } = Layout;

const FrontEnd = () => {
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
      <Layout className={`site-layout ${prefix} `}>
        <Sider className="site-side" breakpoint="lg" collapsedWidth="0">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout className="site-layout-content">
          <Header className="site-head">
            <Space style={{ right: 20 }}>
              <Switch
                checkedChildren="🌞"
                unCheckedChildren="🌜"
                checked={changeStatus}
                onClick={changeTheme}
              />
            </Space>
          </Header>

          <Content id="site-content" className="site-content">
            <Routes>
              {CustomeRoutes.ResumeRoutes.map((item, key) => (
                <Route
                  key={key}
                  path={item.path}
                  element={item.element}
                ></Route>
              ))}
            </Routes>
            <BackTop
              visibilityHeight={1}
              style={{
                zIndex: 1,
                height: 40,
                width: 40,
                lineHeight: "40px",
                borderRadius: 4,
                backgroundColor: "#1088e9",
                color: "#fff",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              ↑
            </BackTop>
          </Content>
          <Footer className="site-foot" style={{ textAlign: "center" }}>
            OCEAN GZY
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default FrontEnd;
