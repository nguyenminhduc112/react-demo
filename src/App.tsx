import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import StateComponent from "./components/Demo/StateComponent";
import Todo from "./components/AppTodo/Todo";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

// Function to generate menu items
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// Items of the Menu
const items: MenuItem[] = [
  getItem("Click Me", "/click-me", <PieChartOutlined />),
  getItem("Todo App", "/todo", <DesktopOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          defaultSelectedKeys={["/click-me"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Routes>
            <Route path="/" element={<StateComponent />} />
            <Route path="/click-me" element={<StateComponent />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
