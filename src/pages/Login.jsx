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
import { Badge } from 'antd';
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { notification } from 'antd';
import { Link } from "react-router-dom";


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


function Login() {

    const [badgeCount, setBadgeCount] = useState(0);

    useEffect(() => {    /*localstorage da shop varsa parse edip sepetin countunu arttır. */
        const shop = localStorage.getItem("shop") || localStorage.getItem([]);
        if (shop !== "[]") {
            const newBadgeCount = JSON.parse(localStorage.getItem("badgeCount"));
            setBadgeCount(newBadgeCount);
        }
    }, []);

    const usersFromService = [
        { username: "kminchelle", password: "0lelplR" },
        // { username: "user2", password: "password2" },
        // { username: "user3", password: "password3" },
        // { username: "user4", password: "password4" }
    ];

    const onFinish = (values,) => {
        console.log('Success:', values);
        try {
            const { username, password } = values;
            const user = usersFromService.find(user => user.username === username && user.password === password);

            if (user) {
                window.location.href = "/Profile";
                console.log("Giriş yapıldı");
            } else {

                notification.error({
                    message: 'Giriş Başarısız',
                    description: 'Kullanıcı adı veya şifre yanlış.',
                });
            }
        } catch (error) {
            console.error(error);
        }
    };


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
                    <div>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={(values) => onFinish(values)}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Kullanıcı Adı"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Şifre"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Lütfen Şifrenizi Giriniz!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Checkbox>Beni Hatırla</Checkbox>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">Gönder</Button>
                            </Form.Item>
                        </Form>

                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Login;
