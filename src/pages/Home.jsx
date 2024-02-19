import React, { useState } from "react";
import "../components/App.css";
import "../components/style.scss";
import { Card, Input, Button, Layout } from "antd";
import { FloatButton, notification } from "antd";
import { Space } from "antd";
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

function Home() {
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
      photo: "assets/birkedibiradambirolum-3.jpg",
      adi: "Bir Kedi Bir Adam Bir Ölüm",
      yazari: "Zülfü Livaneli",
      basim: "2010",
    },
    {
      id: "8",
      photo: "assets/engeregingozu-1.jpg",
      adi: "Engereğin Gözü",
      yazari: "Zülfü Livaneli",
      basim: "1948",
    },
    {
      id: "9",
      photo: "assets/oyunlarlayasayanlar.jpg",
      adi: "Oyunlarla Yaşayanlar",
      yazari: "Oğuz Atay",
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
      photo: " assets/gogebakmaduragi.webp",
      adi: "Göğe Bakma Durağı",
      yazari: "Turgut Uyar",
      basim: "2005",
    },
    {
      id: "12",
      photo: "assets/doriangrey.webp",
      adi: "Dorian Greyin Portresi",
      yazari: "Oscar Wilde",
      basim: "1936",
    },
    {
      id: "13",
      photo: "assets/birbilimadamininromani.jpg",
      adi: "Bir Bilim Adamının Romanı",
      yazari: "Oğuz Atay",
      basim: "1990",
    },
    {
      id: "14",
      photo: "assets/madalyonunici.webp",
      adi: "Madalyonun İçi",
      yazari: "Gülseren Budaycıoğlu",
      basim: "2017",
    },
    {
      id: "15",
      photo: " assets/sircakosk.webp",
      adi: "Sırça Köşk",
      yazari: "Sabahattin Ali",
      basim: "2005",
    },
    {
      id: "16",
      photo: "assets/sevdasozleri.webp",
      adi: "Sevda Sözleri",
      yazari: "Cemal Süreya",
      basim: "1936",
    },
  ]);

  const [book, setBook] = useState({
    id: "",
    photo: "assets/eklenenkitap.jpg",
    adi: "",
    yazari: "",
    basim: "",
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
    setBook({ adi: "", yazari: "", basim: "" });
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

  const contextHolder = notification.useNotification();

  return (
    <div>
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
          <Link to="/Contact"><PhoneOutlined className="phone" /></Link>
          <Link to="/Likes"><HeartOutlined className="heart" /></Link>
          <Link to="/Home"><HomeOutlined className="home" /></Link>

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
                    <HeartOutlined className="heart" key="heart" onClick={() => likeHandler(book)} />,
                    <ShoppingCartOutlined onClick={() => notification.open({
                      message: 'Ürün Alışveriş Sepetine Eklendi.',
                      icon: <ShoppingCartOutlined style={{ color: '#108ee9' }} />
                    })} >{contextHolder}</ShoppingCartOutlined>

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
    </div>
  );
}

export default Home;

