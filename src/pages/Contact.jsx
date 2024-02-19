import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import { FloatButton } from "antd";

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
  // getItem("Kitaplar", "sub1", <MailOutlined />, [
  //   getItem(
  //     null,
  //     null,
  //     null,
  //     [
  //       getItem("İstanbul Hatırası", "1"),
  //       getItem("1984", "2"),
  //       getItem("Şeker Portakalı", "3"),
  //       getItem("Huzursuzluk", "4"),
  //       getItem("Olasılıksız", "5"),
  //       getItem("Semaver", "6"),
  //     ],
  //     "group"
  //   ),
  // ]),
  // getItem("Yazarlar", "sub2", <AppstoreOutlined />, [
  //   getItem("Ahmet Ümit", "7"),
  //   getItem("George Orwell", "8"),
  //   getItem("Vasconcelos", "9"),
  //   getItem("Zülfü Livaneli", "10"),
  //   getItem("Adam Fawer", "11"),
  //   getItem("Sait Faik Abasıyanık", "12"),
  // ]),
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

const onFinish = (values) => {
  console.log(values);
};

function Contact() {
  return (
    <Layout style={layoutStyle}>
      <Header
        style={headerStyle}
        actions={[
          <HeartOutlined key="heart" />,
          <HomeOutlined key="home" />,
          <PhoneOutlined key="phone" />,
        ]}
      >
        MY BOOK PLATFORM
        <Link to="/Alisveris"><ShoppingCartOutlined className="shop" /></Link>
        <Link to="/Contact">
          <PhoneOutlined className="phone" />
        </Link>
        <Link to="/Likes">
          <HeartOutlined className="heart" />
        </Link>
        <Link to="/Home">
          <HomeOutlined className="home" />
        </Link>
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
          <Typography.Title
            level={3}
            style={{
              marginLeft: "-450px",
              marginTop: "-10px",
              color: "#2c3e50",
              fontSize: "22px"
            }}
          >
            Bizimle Düşüncelerinizi Paylaşmak ister misiniz?
          </Typography.Title>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
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
            {/* <Form.Item name={["user", "website"]} label="Website">
              <Input />
            </Form.Item> */}
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
