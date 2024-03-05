import React, { useState, useEffect } from "react";
import "../components/App.css";
import "../components/style.scss";
import { Card, Input, Layout } from "antd";
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
  getItem("Anasayfa", "sub6", <Link to="/Home"><HomeOutlined /></Link>),
  getItem('Profil', 'sub5', <Link to="/BeforeLogin"> <UserOutlined /></Link>),
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

function Home() {
  const [badgeCount, setBadgeCount] = useState(0);
  const [likedBooks, setLikedBooks] = useState([]);
  const [library, setLibrary] = useState([{
    id: "1",
    photo: "assets/istanbulhatirasi.jpg",
    adi: "İstanbul Hatırası",
    yazari: "Ahmet Ümit",
    basim: "2010",
    fiyat: "22 TL"
  },
  {
    id: "2",
    photo: "assets/1984.jpg",
    adi: "1984",
    yazari: "George Orwell",
    basim: "1948",
    fiyat: "24 TL"
  },
  {
    id: "3",
    photo: "assets/sekerportakali.jpg",
    adi: "Şeker Portakalı",
    yazari: "Vasconcelos",
    basim: "1990",
    fiyat: "42 TL"
  },
  {
    id: "4",
    photo: "assets/huzursuzluk.jpg",
    adi: "Huzursuzluk",
    yazari: "Zülfü Livaneli",
    basim: "2017",
    fiyat: "92 TL"
  },
  {
    id: "5",
    photo: " assets/olasılıksız.jpg",
    adi: "Olasılıksız",
    yazari: "Adam Fawer",
    basim: "2005",
    fiyat: "52 TL"
  },
  {
    id: "6",
    photo: "assets/semaver.jpg",
    adi: "Semaver",
    yazari: "Sait Faik Abasıyanık",
    basim: "1936",
    fiyat: "88 TL"
  },
  {
    id: "7",
    photo: "assets/birkedibiradambirolum-3.jpg",
    adi: "Bir Kedi Bir Adam Bir Ölüm",
    yazari: "Zülfü Livaneli",
    basim: "2010",
    fiyat: "62 TL"
  },
  {
    id: "8",
    photo: "assets/engeregingozu-1.jpg",
    adi: "Engereğin Gözü",
    yazari: "Zülfü Livaneli",
    basim: "1948",
    fiyat: "23 TL"
  },
  {
    id: "9",
    photo: "assets/oyunlarlayasayanlar.jpg",
    adi: "Oyunlarla Yaşayanlar",
    yazari: "Oğuz Atay",
    basim: "1990",
    fiyat: "15 TL"
  },
  {
    id: "10",
    photo: "assets/huzursuzluk.jpg",
    adi: "Huzursuzluk",
    yazari: "Zülfü Livaneli",
    basim: "2017",
    fiyat: "17 TL"
  },
  {
    id: "11",
    photo: " assets/gogebakmaduragi.webp",
    adi: "Göğe Bakma Durağı",
    yazari: "Turgut Uyar",
    basim: "2005",
    fiyat: "22 TL"
  },
  {
    id: "12",
    photo: "assets/doriangrey.webp",
    adi: "Dorian Greyin Portresi",
    yazari: "Oscar Wilde",
    basim: "1936",
    fiyat: "27 TL"
  },
  {
    id: "13",
    photo: "assets/birbilimadamininromani.jpg",
    adi: "Bir Bilim Adamının Romanı",
    yazari: "Oğuz Atay",
    basim: "1990",
    fiyat: "47 TL"
  },
  {
    id: "14",
    photo: "assets/madalyonunici.webp",
    adi: "Madalyonun İçi",
    yazari: "Gülseren Budaycıoğlu",
    basim: "2017",
    fiyat: "33 TL"
  },
  {
    id: "15",
    photo: " assets/sircakosk.webp",
    adi: "Sırça Köşk",
    yazari: "Sabahattin Ali",
    basim: "2005",
    fiyat: "87 TL"
  },
  {
    id: "16",
    photo: "assets/sevdasozleri.webp",
    adi: "Sevda Sözleri",
    yazari: "Cemal Süreya",
    basim: "1936",
    fiyat: "102 TL"
  }]);
  const [inputText, setInputText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(library);


  const inputSearch = (e) => {
    const lowerCase = e.target.value.toLocaleLowerCase();
    setInputText(lowerCase);
  };

  const searchData = () => {  /*inputta filtreleme yapar büyük küçük harf ve ing kelime durumunu değiştirir*/
    const filteredData = library.filter((e) =>
      e.adi.toLocaleLowerCase().includes(inputText)
    );
    setFilteredBooks(filteredData);
  };

  useEffect(() => {   /* likes sayfasına at  */
    const likes = window.localStorage.getItem("likes");
    if (likes !== null) {
      setLikedBooks(JSON.parse(likes))
    }
  }, []);


  const addAndRemoveFavorite = (bookId) => {  /*kitaplar favorilere eklenmediyse ekler, ekliyse siler */
    const isBookLiked = likedBooks.some(book => book.id === bookId);
    if (isBookLiked) {
      const updatedLikes = likedBooks.filter(book => book.id !== bookId); /* kitap id lerinden eşleşen var mı? diye kontrol eder*/
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
      setLikedBooks(updatedLikes);
    } else {
      const bookToAdd = library.find(book => book.id === bookId);
      if (bookToAdd) {
        const updatedLikes = [...likedBooks, bookToAdd];
        localStorage.setItem("likes", JSON.stringify(updatedLikes));
        setLikedBooks(updatedLikes);
      }
    }
  };

  useEffect(() => { /*localstorage da shop varsa parse edip sepetin countunu arttır. */
    const shop = localStorage.getItem("shop") || localStorage.getItem([]);
    if (shop !== null || shop !== "[]") {
      const newBadgeCount = JSON.parse(localStorage.getItem("badgeCount"));
      setBadgeCount(newBadgeCount);
    }
  }, []);

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

  return (
    <div>
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
              <Space.Compact block>
                <Input
                  placeholder="Kitap Adı ile Arama Yapınız."
                  onChange={inputSearch}
                  onKeyUp={searchData}
                />
              </Space.Compact>
            <div className="div-section">
              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="ant-card-body"
                  cover={<img className="img" alt="" src={book.photo} />}
                  actions={[
                    <div onClick={() => addAndRemoveFavorite(book.id)}><Heart key="heart" /></div>,
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

