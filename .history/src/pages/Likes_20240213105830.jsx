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


function Likes() {
 
  return (
          <Layout >
            <Header
              actions={[
                <HeartOutlined key="heart" />,
                <HomeOutlined key="home" />,
                <PhoneOutlined key="phone" />,
              ]}
            >
              MY BOOKS PLATFORM
              <PhoneOutlined className="phone" />
              <HeartOutlined className="heart" />
              <HomeOutlined className="home"/>
            </Header>
            <Layout>
              <Sider>
                <Menu
                  style={{
                    width: 256,
                  }}
                  mode="vertical"
                  items={items}
                />
              </Sider>
              <Content>
                  <h1>Favoriler</h1>
          
                <div style={{ height: "300vh", padding: 10 }}>
                  <FloatButton.BackTop />
                </div>
              </Content>
            </Layout>
            <Footer>Created by Beste Türkmen</Footer>
          </Layout>       
  );
}

export default Likes;

