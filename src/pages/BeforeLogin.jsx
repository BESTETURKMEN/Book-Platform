import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import {
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Badge } from 'antd';
import React, { useState, useEffect } from "react";
import { Button, Flex } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Anasayfa", "sub6", <Link to="/Home"><HomeOutlined /></Link>),
    getItem('Profil', 'sub5', <Link to="/BeforeLogin"> <UserOutlined /></Link>),];
// getItem("Ayarlar", "sub4", <Link to="/Ayarlar"><SettingOutlined /></Link>)];

const layoutStyle = { minHeight: "100vh" };
const headerStyle = {
    textAlign: "center",
    fontSize: "28px",
    backgroundColor: "#f2f2f2",
};
const siderStyle = {
    textAlign: "center",
    color: "#ffffff",
};
const contentStyle = {
    padding: "50px",
    textAlign: "center",
};

const footerStyle = {
    textAlign: "center",
    backgroundColor: "#F2F2F2",
};


function BeforeLogin() {

    const [badgeCount, setBadgeCount] = useState(0);

    useEffect(() => {    /*localstorage da shop varsa parse edip sepetin countunu arttır. */
        const shop = localStorage.getItem("shop") || localStorage.getItem([]);
        if (shop !== "[]") {
            const newBadgeCount = JSON.parse(localStorage.getItem("badgeCount"));
            setBadgeCount(newBadgeCount);
        }
    }, []);

    return (
        <Layout style={layoutStyle}>
            <Header
                style={headerStyle}
                actions={[
                    <HeartOutlined key="heart" />,
                    <PhoneOutlined key="phone" />,
                    <ShoppingCartOutlined key="shop" />,
                    <UserOutlined key="login" />
                ]}>
                <div>MY BOOK PLATFORM</div>
                <div className="icons">
                    <Link to="/Login"><UserOutlined /></Link>
                    <Link to="/Contact"><PhoneOutlined className="phone" /></Link>
                    <Link to="/Likes"><HeartOutlined className="heart" /></Link>
                    <Link to="/Alisveris"><ShoppingCartOutlined className="shop" /><Badge className="notif" count={badgeCount} /></Link>
                </div>
            </Header>
            <Layout>
                <Sider width="20%" style={siderStyle}>
                    <Menu
                        style={{
                            width: 256,
                        }}
                        mode="vertical"
                        items={items}
                    />
                </Sider>
                <Content style={contentStyle}>

                    <Flex vertical gap="large" >
                        <div className="titlehead">
                            <p>Devam edebilmek için lütfen giriş yapın!</p>
                        </div>
                        <Link to="/Login">
                            <Button className="btn-1" type="primary" block>
                                Giriş Yap
                            </Button>
                        </Link>
                        <div className="title">
                            <p>Üye değil misiniz?
                                Hızlı ve güvenli bir alışveriş için hemen yeni bir hesap oluşturun!</p>
                        </div>
                        <Link to="/SignUp">
                            <Button className="btn-2" type="primary" block>
                                Hemen Üye Ol
                            </Button>
                        </Link>
                        <Link to="/Alisveris">
                            <Button className="btn-3" type="primary" block>
                                Üye Olmadan Devam Et
                            </Button>
                        </Link>

                    </Flex>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default BeforeLogin;
