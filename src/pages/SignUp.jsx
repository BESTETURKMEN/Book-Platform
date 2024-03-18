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
import {
    Button,
    // DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
} from 'antd';

// const { RangePicker } = DatePicker;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

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
    // textAlign: "center",
};

const footerStyle = {
    textAlign: "center",
    backgroundColor: "#F2F2F2",
};


function SignUp() {

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
                    <h1 className="signuptitle">Hesap Oluştur</h1>
                    <Form
                        {...formItemLayout}
                        variant="filled"
                        style={{
                            maxWidth: 600,
                        }}
                    >
                        <Form.Item
                            label="Ad"
                            name="Input"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen Adınızı Giriniz!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Soyad"
                            name="InputNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen Soyadınızı Giriniz!',
                                },
                            ]}
                        >
                            <InputNumber
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="E-posta Adresi"
                            name="TextArea"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen E-posta Adresinizi Giriniz!',
                                },
                            ]}
                        >
                            <Input addonAfter=".com" defaultValue=" " />
                        </Form.Item>
                        <Form.Item
                            label="Şifre"
                            name="Mentions"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen Şifrenizi Giriniz!',
                                },
                            ]}
                        >
                            <Mentions />
                        </Form.Item>
                        <Form.Item
                            label="Şifre Tekrarı"
                            name="Mentions"
                            rules={[
                                {
                                    required: true,
                                    message: 'Lütfen Şifrenizi Giriniz!',
                                },
                            ]}
                        >
                            <Mentions />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 6,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Gönder
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default SignUp;
