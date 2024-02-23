import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import React, { useState, useEffect } from "react";
import { Button, Result } from 'antd';
import {
    SettingOutlined,
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Badge } from 'antd';

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
    getItem("Ayarlar", "sub4", <Link to="/Ayarlar"><SettingOutlined /></Link>),
    getItem('Profil', 'sub5', <Link to="/Profile"> <UserOutlined /></Link>),
    getItem("Alışveriş", "sub6", <Link to="/Alisveris"><ShoppingCartOutlined /></Link>)];
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

function Payment() {

    const [badgeCount, setBadgeCount] = useState(0);
    useEffect(() => {
        const shop = JSON.parse(localStorage.getItem("shop")) || [];
        setBadgeCount(shop.length);
    }, []);

    return (
        <Layout style={layoutStyle}>
            <Header
                style={headerStyle}
                actions={[
                    <HeartOutlined key="heart" />,
                    <HomeOutlined key="home" />,
                    <PhoneOutlined key="phone" />,
                    <ShoppingCartOutlined key="shop" />,
                ]}>
                <div>MY BOOK PLATFORM</div>
                <div className="icons">
                    <Link to="/Home"><HomeOutlined className="home" /></Link>
                    <Link to="/Likes"><HeartOutlined className="heart" /></Link>
                    <Link to="/Contact"><PhoneOutlined className="phone" /></Link>
                    <Link to="/Alisveris"><ShoppingCartOutlined className="shop" /><Badge className="notif" count={badgeCount} /></Link>
                </div>
            </Header>
            <Layout>
                <Sider style={siderStyle}>
                    <Menu
                        style={{
                            width: 256,
                        }}
                        mode="vertical"
                        items={items}
                    />
                </Sider>
                <Content style={contentStyle}>
                    <div>
                        <Result
                            status="success"
                            title="Satın Alma İşleminiz Başarıyla Gerçekleştirildi."
                            subTitle="Sipariş numarası: 2017182818828182881 "
                            extra={[
                                <Link to="/Home"><Button type="primary" key="console">Anasayfaya Dön</Button></Link>,
                                <Link to="/Alisveris"><Button type="primary" key="buy">Sepete Dön</Button></Link>
                            ]}
                        />
                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Payment;
