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
import { Badge } from 'antd';
import { notification } from "antd";


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

function Likes() {

  const [badgeCount, setBadgeCount] = useState(0);
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => { /*localstorage da shop varsa parse edip sepetin countunu arttır. */
    const shop = localStorage.getItem("shop") || localStorage.getItem([]);
    if (shop !== null || shop !== "[]") {
      const newBadgeCount = JSON.parse(localStorage.getItem("badgeCount"));
      setBadgeCount(newBadgeCount);
    }
  }, []);

  useEffect(() => {
    const likes = window.localStorage.getItem("likes");
    if (likes !== null) {
      setLikedBooks(JSON.parse(likes))
    }
  }, []);

  function RemoveCard(cardId) {
    const updatedLikes = likedBooks.filter((like) => like.id !== cardId);
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
    setLikedBooks(updatedLikes);
  }

  const shopHandler = (book) => { /*sepette ürün varsa değeri arttır */
    const shop = JSON.parse(localStorage.getItem("shop")) || [];
    const existingBook = shop.find(item => item.id === book.id);

    if (existingBook) {
      return;
    }
    const updatedShop = [...shop, book];
    localStorage.setItem("shop", JSON.stringify(updatedShop));

    const newBadgeCount = shop.length + 1;
    localStorage.setItem("badgeCount", newBadgeCount.toString());
    setBadgeCount(newBadgeCount);


    /* sepete eklendi bildirimi */
    notification.open({
      description: `${book.adi}  Alışveriş Sepetine Eklendi`,
      onClick: () => {
        window.location.href = '/Alisveris';
      }
    })
  };

  if (likedBooks === null || likedBooks.length === 0) {
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
                  <ShoppingCartOutlined key="shop" onClick={() => shopHandler(like)} />,
                ]}
              >
                <Meta
                  title={<p>{like.adi}</p>}
                  author={<p>{like.yazari}</p>}
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
