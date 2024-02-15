import React, { useState } from "react";
import "../components/App.css";
import "../components/style.scss";
import {  Layout } from "antd";
import { FloatButton } from "antd";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Card } from "antd";
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
  getItem("Kitaplar", "sub1", <MailOutlined />, [
    getItem(
      null,
      null,
      null,
      [
        getItem("İstanbul Hatırası", "1"),
        getItem("1984", "2"),
        getItem("Şeker Portakalı", "3"),
        getItem("Huzursuzluk", "4"),
        getItem("Olasılıksız", "5"),
        getItem("Semaver", "6"),
      ],
      "group"
    ),
  ]),
  getItem("Yazarlar", "sub2", <AppstoreOutlined />, [
    getItem("Ahmet Ümit", "7"),
    getItem("George Orwell", "8"),
    getItem("Vasconcelos", "9"),
    getItem("Zülfü Livaneli", "10"),
    getItem("Adam Fawer", "11"),
    getItem("Sait Faik Abasıyanık", "12"),
  ]),
  getItem("Ayarlar", "sub4", <SettingOutlined />, [getItem("Profil", "13")]),
];

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

  const [library, setLibrary] = useState([
    {
      id: "1",
      photo: "assets/istanbulhatirasi.jpg",
      adi: "İstanbul Hatırası",
      yazari: "Ahmet Ümit",
      basim: "2010",
    },
    {
      id: "2",
      photo: "assets/1984.jpg",
      adi: "1984",
      yazari: "George Orwell",
      basim: "1948",
    },
    {
      id: "3",
      photo: "assets/sekerportakali.jpg",
      adi: "Şeker Portakalı",
      yazari: "Vasconcelos",
      basim: "1990",
    },
    {
      id: "4",
      photo: "assets/huzursuzluk.jpg",
      adi: "Huzursuzluk",
      yazari: "Zülfü Livaneli",
      basim: "2017",
    },
    {
      id: "5",
      photo: " assets/olasılıksız.jpg",
      adi: "Olasılıksız",
      yazari: "Adam Fawer",
      basim: "2005",
    },
    {
      id: "6",
      photo: "assets/semaver.jpg",
      adi: "Semaver",
      yazari: "Sait Faik Abasıyanık",
      basim: "1936",
    },
    {
      id: "7",
      photo: "assets/istanbulhatirasi.jpg",
      adi: "İstanbul Hatırası",
      yazari: "Ahmet Ümit",
      basim: "2010",
    },
    {
      id: "8",
      photo: "assets/1984.jpg",
      adi: "1984",
      yazari: "George Orwell",
      basim: "1948",
    },
    {
      id: "9",
      photo: "assets/sekerportakali.jpg",
      adi: "Şeker Portakalı",
      yazari: "Vasconcelos",
      basim: "1990",
    },
    {
      id: "10",
      photo: "assets/huzursuzluk.jpg",
      adi: "Huzursuzluk",
      yazari: "Zülfü Livaneli",
      basim: "2017",
    },
    {
      id: "11",
      photo: "assets/olasılıksız.jpg",
      adi: "Olasılıksız",
      yazari: "Adam Fawer",
      basim: "2005",
    },
    {
      id: "12",
      photo: "assets/semaver.jpg",
      adi: "Semaver",
      yazari: "Sait Faik Abasıyanık",
      basim: "1936",
    },
    {
      id: "13",
      photo: "assets/istanbulhatirasi.jpg",
      adi: "İstanbul Hatırası",
      yazari: "Ahmet Ümit",
      basim: "2010",
    },
    {
      id: "14",
      photo: "assets/1984.jpg",
      adi: "1984",
      yazari: "George Orwell",
      basim: "1948",
    },
    {
      id: "15",
      photo: "assets/sekerportakali.jpg",
      adi: "Şeker Portakalı",
      yazari: "Vasconcelos",
      basim: "1990",
    },
    {
      id: "16",
      photo: "/assets/huzursuzluk.jpg",
      adi: "Huzursuzluk",
      yazari: "Zülfü Livaneli",
      basim: "2017",
    },
    {
      id: "17",
      photo: "assets/olasılıksız.jpg",
      adi: "Olasılıksız",
      yazari: "Adam Fawer",
      basim: "2005",
    },
    {
      id: "18",
      photo: "assets/semaver.jpg",
      adi: "Semaver",
      yazari: "Sait Faik Abasıyanık",
      basim: "1936",
    },
  ]);

  const [likesbook, setLikesBook] = useState({
    id: "",
    photo: "",
    adi: "",
    yazari: "",
    basim: "",
  });





  const [filteredLikesBooks, setFilteredLikesBooks] = useState(library);

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
              MY BOOKS PLATFORM
              <Link to="/Contact"><PhoneOutlined className="phone"/></Link>
              <Link to="/Likes"><HeartOutlined className="heart"/></Link>
              <Link to="/Home"><HomeOutlined className="home"/></Link>
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
                  <h1>Favoriler</h1>
                  <div className="div-section">
                  {filteredLikesBooks.map((Likesbook) => (
                    <Card
                      key={Lbook.id}
                      className="ant-card-body"
                      cover={<img className="img" alt="" src={book.photo} />}
                      actions={[
                        <HeartOutlined key="heart" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        title={<p>{book.adi}</p>}
                        description={<p>{book.yazari}</p>}
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

