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
const onClick = (e) => {
  console.log("click", e);
};
const onPhoneClick = (e) => {
  console.log("phone", e);
};
const onHomeClick = (e) => {
  console.log("home", e);
};
const onHeartClick = (e) => {
  console.log("heart", e);
};
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
  return (
          <Layout >
            <Header
              style={headerStyle}
              actions={[
                <HeartOutlined key="heart" />,
                <HomeOutlined key="home" />,
                <PhoneOutlined key="phone" />,
              ]}
            >
              MY BOOKS PLATFORM
              <PhoneOutlined className="phone" onClick={onPhoneClick} />
              <HeartOutlined className="heart" onClick={onHeartClick} />
              <HomeOutlined className="home" onClick={onHomeClick} />
            </Header>
            <Layout>
              <Sider width="20%" style={siderStyle}>
                <Menu
                  onClick={onClick}
                  style={{
                    width: 256,
                  }}
                  mode="vertical"
                  items={items}
                />
              </Sider>
              <Content style={contentStyle}>
                  <h1>Favoriler</h1>
                  





                  
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

