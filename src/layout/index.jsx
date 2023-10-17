import React from "react";
import { Layout, Space } from 'antd';
import { Outlet } from "react-router-dom";
import SideMenu from "./side_menu";
const { Header, Footer, Sider, Content } = Layout;

const CustomLayout = () => {
    return (
        <Layout>
            <Sider className="sider">
                <SideMenu />
            </Sider>
            <Layout>
                <Header className="header">Header</Header>
                <Content className="content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default CustomLayout;
