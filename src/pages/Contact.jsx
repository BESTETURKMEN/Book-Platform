import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import { FloatButton } from "antd";
import React, { useState, useEffect } from "react";
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
import { Button, Form, Input, InputNumber } from "antd";
import { Typography } from 'antd';
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
  getItem("Anasayfa", "sub6", <Link to="/Home"><HomeOutlined /></Link>),
  getItem('Profil', 'sub5', <Link to="/Profile"> <UserOutlined /></Link>),
  getItem("Ayarlar", "sub4", <Link to="/Ayarlar"><SettingOutlined /></Link>)];

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
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */


function Contact() {

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
          // <HomeOutlined key="home" />,
          <PhoneOutlined key="phone" />,
          <ShoppingCartOutlined key="shop" />,
        ]}>
        <div>MY BOOK PLATFORM</div>
        <div className="icons">
          {/* <Link to="/Home"><HomeOutlined className="home" /></Link> */}
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
          <Typography.Title
            level={3}
            style={{
              marginLeft: "-450px",
              marginTop: "-10px",
              color: "#2c3e50",
              fontSize: "20px",
              textAlign: "center"
            }}
          >
            Bizimle Düşüncelerinizi Paylaşmak ister misiniz?
          </Typography.Title>
          <Form
            {...layout}
            name="nest-messages"
            style={{
              maxWidth: 600,
              marginTop: "50px"
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Adı"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "surname"]}
              label="Soyadı"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Yaşınız"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={["user", "introduction"]} label="Düşünceleriniz">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Gönder
              </Button>
            </Form.Item>
          </Form>
          <div style={{ height: "300vh", padding: 10 }}>
            <FloatButton.BackTop />
          </div>
        </Content>
      </Layout>
      <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
    </Layout>
  );
}

export default Contact;
