import { Layout } from "antd";
import logo from "../logo/logo.png";
import logofold from "../logo/logo-fold.png"
import "./header.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from "@ant-design/icons"
import { useState } from "react";
import Notify from "../Notify/notify";
import MenuSider from "../MenuSider/menusider";
import { Outlet } from "react-router-dom";
const { Sider, Content } = Layout;

function LearnLayout() {
    const [collapsed ,setCollapsed] = useState(false);
    return (
        <>
            <Layout className="layout-default">
                <header className="header">
                    <div className={"header__logo " + (collapsed ? "header__logo--collapsed": "")}>
                        <img src={(collapsed ? logofold : logo)} alt="Logo" />
                    </div>
                    <div className="header__nav">
                        <div className="header__nav--left">
                            <div className="header__collapse">
                                {collapsed ? (
                                    <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)}/>
                                ):(
                                    <MenuFoldOutlined onClick={() => setCollapsed(!collapsed)}/>
                                )}
                            </div>
                            <div className="header__search">
                                <SearchOutlined />
                            </div>
                        </div>
                        <div className="header__nav--right">
                            <Notify/>
                        </div>
                    </div>
                </header>
                <Layout>
                    <Sider className="sider" collapsed={collapsed} theme="light">
                        <MenuSider/>
                    </Sider>
                    <Content className="content">
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LearnLayout;