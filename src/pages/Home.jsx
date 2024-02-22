import React, { useState, useEffect } from "react";
import "../components/App.css";
import "../components/style.scss";
import { Card, Input, Button, Layout } from "antd";
import { FloatButton, notification } from "antd";
import {
  SettingOutlined,
  HeartOutlined,
  HomeOutlined,
  PhoneOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Heart from "../components/heart";
import { Badge, Space } from 'antd';

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

function Home() {

  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    const shop = JSON.parse(localStorage.getItem("shop")) || [];
    setBadgeCount(shop.length);
  }, []);

  const [library, setLibrary] = useState([
    {
      id: "1",
      photo: "assets/istanbulhatirasi.jpg",
      adi: "İstanbul Hatırası",
      yazari: "Ahmet Ümit",
      basim: "2010",
      fiyat: "22.90 TL"
    },
    {
      id: "2",
      photo: "assets/1984.jpg",
      adi: "1984",
      yazari: "George Orwell",
      basim: "1948",
      fiyat: "24.90 TL"
    },
    {
      id: "3",
      photo: "assets/sekerportakali.jpg",
      adi: "Şeker Portakalı",
      yazari: "Vasconcelos",
      basim: "1990",
      fiyat: "42.90 TL"
    },
    {
      id: "4",
      photo: "assets/huzursuzluk.jpg",
      adi: "Huzursuzluk",
      yazari: "Zülfü Livaneli",
      basim: "2017",
      fiyat: "92.90 TL"
    },
    {
      id: "5",
      photo: " assets/olasılıksız.jpg",
      adi: "Olasılıksız",
      yazari: "Adam Fawer",
      basim: "2005",
      fiyat: "52.90 TL"
    },
    {
      id: "6",
      photo: "assets/semaver.jpg",
      adi: "Semaver",
      yazari: "Sait Faik Abasıyanık",
      basim: "1936",
      fiyat: "88.90 TL"
    },
    {
      id: "7",
      photo: "assets/birkedibiradambirolum-3.jpg",
      adi: "Bir Kedi Bir Adam Bir Ölüm",
      yazari: "Zülfü Livaneli",
      basim: "2010",
      fiyat: "62.90 TL"
    },
    {
      id: "8",
      photo: "assets/engeregingozu-1.jpg",
      adi: "Engereğin Gözü",
      yazari: "Zülfü Livaneli",
      basim: "1948",
      fiyat: "23.90 TL"
    },
    {
      id: "9",
      photo: "assets/oyunlarlayasayanlar.jpg",
      adi: "Oyunlarla Yaşayanlar",
      yazari: "Oğuz Atay",
      basim: "1990",
      fiyat: "15.90 TL"
    },
    {
      id: "10",
      photo: "assets/huzursuzluk.jpg",
      adi: "Huzursuzluk",
      yazari: "Zülfü Livaneli",
      basim: "2017",
      fiyat: "17.90 TL"
    },
    {
      id: "11",
      photo: " assets/gogebakmaduragi.webp",
      adi: "Göğe Bakma Durağı",
      yazari: "Turgut Uyar",
      basim: "2005",
      fiyat: "22.90 TL"
    },
    {
      id: "12",
      photo: "assets/doriangrey.webp",
      adi: "Dorian Greyin Portresi",
      yazari: "Oscar Wilde",
      basim: "1936",
      fiyat: "27.90 TL"
    },
    {
      id: "13",
      photo: "assets/birbilimadamininromani.jpg",
      adi: "Bir Bilim Adamının Romanı",
      yazari: "Oğuz Atay",
      basim: "1990",
      fiyat: "47.90 TL"
    },
    {
      id: "14",
      photo: "assets/madalyonunici.webp",
      adi: "Madalyonun İçi",
      yazari: "Gülseren Budaycıoğlu",
      basim: "2017",
      fiyat: "33.90 TL"
    },
    {
      id: "15",
      photo: " assets/sircakosk.webp",
      adi: "Sırça Köşk",
      yazari: "Sabahattin Ali",
      basim: "2005",
      fiyat: "87.90 TL"
    },
    {
      id: "16",
      photo: "assets/sevdasozleri.webp",
      adi: "Sevda Sözleri",
      yazari: "Cemal Süreya",
      basim: "1936",
      fiyat: "102.90 TL"
    },
  ]);

  const [book, setBook] = useState({
    id: "",
    photo: "assets/eklenenkitap.jpg",
    adi: "",
    yazari: "",
    basim: "",
    fiyat: ""
  });

  const addBook = () => {
    if (
      book.adi.trim() === "" ||
      book.yazari.trim() === "" ||
      book.basim.trim() === ""
    ) {
      return;
    }

    setLibrary([...library, book]);
    setBook({ adi: "", yazari: "", fiyat: "" });
    setFilteredBooks([...library, book]);
  };

  const [inputText, setInputText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(library);

  const inputSearch = (e) => {
    const lowerCase = e.target.value.toLocaleLowerCase();
    setInputText(lowerCase);
  };

  const searchData = () => {
    const filteredData = library.filter((e) =>
      e.adi.toLocaleLowerCase().includes(inputText)
    );
    setFilteredBooks(filteredData);
  };

  const likeHandler = (book) => {
    const likes = JSON.parse(localStorage.getItem("likes")) || [];

    const existingBook = likes.find(item => item.id === book.id);
    if (existingBook) {
      return;
    }
    const updatedLikes = [...likes, book];
    localStorage.setItem("likes", JSON.stringify(updatedLikes));
  };

  const shopHandler = (book) => {
    const shop = JSON.parse(localStorage.getItem("shop")) || [];
    const existingBook = shop.find(item => item.id === book.id);
    if (existingBook) {
      return;
    }
    const updatedShop = [...shop, book];
    localStorage.setItem("shop", JSON.stringify(updatedShop));

    notification.open({
      message: 'Ürün Alışveriş Sepetine Eklendi.',
      icon: <ShoppingCartOutlined style={{ color: '#108ee9' }} />
    })
  };



  return (
    <div>
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

            <div className="input">
              <Space.Compact block>
                <Input
                  placeholder="Kitap Adı"
                  value={book.adi}
                  onChange={(e) =>
                    setBook({ ...book, adi: e.target.value })
                  }
                />
                <Input
                  placeholder="Kitabın Yazarı"
                  value={book.yazari}
                  onChange={(e) =>
                    setBook({ ...book, yazari: e.target.value })
                  }
                />
                <Input
                  placeholder="Basım Yılı"
                  value={book.basim}
                  onChange={(e) =>
                    setBook({ ...book, basim: e.target.value })
                  }
                />
                <Button type="primary" onClick={addBook}>
                  Ekle
                </Button>
              </Space.Compact>
            </div>
            <div className="search-section">
              <Space.Compact block>
                <Input
                  placeholder="Kitap Adı ile Arama Yapınız."
                  onChange={inputSearch}
                  onKeyUp={searchData}
                />
                <Button type="primary" onClick={searchData}>
                  Ara
                </Button>
              </Space.Compact>
            </div>
            <div className="div-section">
              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="ant-card-body"
                  cover={<img className="img" alt="" src={book.photo} />}
                  actions={[
                    <div onClick={() => likeHandler(book)}><Heart key="heart" /></div>,
                    <ShoppingCartOutlined key="shop" onClick={() => shopHandler(book)} />,
                  ]}
                >
                  <Meta
                    title={<p>{book.adi}</p>}
                    author={<p>{book.yazari}</p>}
                    description={<p>{book.fiyat}</p>}
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
    </div>
  );
}

export default Home;

