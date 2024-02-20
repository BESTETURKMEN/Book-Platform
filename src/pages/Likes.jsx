import React, { useState, useEffect } from "react";
import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import { FloatButton } from "antd";
import {
  ShoppingCartOutlined,
  SettingOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import "./style.scss";
import { Typography } from "antd";


const { Meta } = Card;

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
  getItem("Alışveriş", "sub6", <Link to="/Alisveris"><ShoppingCartOutlined /></Link>
  )]
  ;

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

function Likes() {
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("likes"));
    setLikedBooks(likes);
  }, []);

  function RemoveCard(cardId) {
    const updatedLikes = likedBooks.filter((like) => like.id !== cardId);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    setLikedBooks(updatedLikes);
  }

  if (likedBooks === null || likedBooks.length === 0) {
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
          <Sider style={siderStyle}>
            <Menu
              mode="vertical"
              items={items}
            />
          </Sider>
          <Content style={contentStyle}>
            <Typography.Title
              level={3}
              style={{
                margin: 0,
              }}
            >
              FAVORİLER LİSTENİZDE HİÇBİR ÖĞE BULUNMAMAKTADIR.
            </Typography.Title>
          </Content>
        </Layout>
        <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
      </Layout>
    )
  }

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
              margin: 0,
            }}
          >
            FAVORİLER
          </Typography.Title>
          <div className="div-section">
            {likedBooks.map((like) => (
              <Card
                key={like.id}
                className="ant-card-body"
                cover={<img className="img" alt="" src={like.photo} />}
                actions={[
                  <DeleteOutlined
                    key="ellipsis"
                    onClick={() => RemoveCard(like.id)}
                  />,
                ]}
              >
                <Meta
                  title={<p>{like.adi}</p>}
                  description={<p>{like.yazari}</p>}
                  description={<p>{like.fiyat}</p>}
                />
              </Card>
            ))}
          </div>
          <div style={{ height: "300vh", padding: 10 }}>
            <FloatButton.BackTop />
          </div>
        </Content>
      </Layout>
      <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
    </Layout>
  );
}

export default Likes;
