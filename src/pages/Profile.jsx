import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import { Card } from 'antd';
import React, { useState, useEffect } from "react";

import {
    ShoppingCartOutlined,
    MailOutlined,
    SettingOutlined,
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
    UserOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { Typography } from 'antd';
import { Button } from 'antd';
import { Avatar, Badge } from 'antd';

import { List } from 'antd';
const photo = [
    {
        icon: "assets/ahmetumit.jfif",
        title: 'Ahmet Ümit',
    },
    {
        icon: "assets/georgeorwell.jfif",
        title: 'George Orwell',
    },
    {
        icon: "assets/vasconcelos.jfif",
        title: 'Vasconcelos',
    },
    {
        icon: "assets/zülfülivaneli.jfif",
        title: 'Zülfü Livaneli',
    },
    {
        icon: "assets/adamfawer.jfif",
        title: 'Adam Fawer',
    },
    {
        icon: "assets/saitfaikabasiyanik.jfif",
        title: 'Sait Faik Abasıyanık',
    },
];

const gridStyle = {
    width: '20%',
    textAlign: 'center',

};

const { Title, Text } = Typography;
const { Header, Content, Sider } = Layout;
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


const datas = [
    "Edebiyat",
    "Roman",
    "Dünya Klasikleri",
    "Fantastik",
    "Hikaye(Öykü)",
    "Bilim-Teknoloji-Mühendislik",
    "Felsefe-Düşünce",
    "İnsan ve Toplum",
    "Tarih"
]

function Profile() {

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
                    <div className="border">
                        <div className="border-header"><img alt=" " className="border-photo" src={"./assets/books-3.jpg"} /></div>
                        <div className="profile-icon"> <Avatar src={"./assets/face-2.jfif"} size={{ xxl: 130 }} /></div>
                        <div className="text"><Title level={4}>Username</Title></div>
                        <div className="text-area"><Text type="secondary">@username</Text></div>
                        <div className="icons">
                            <UploadOutlined className="upload" />
                            <MailOutlined className="mail" />
                            <Button className="follow" type="primary">Takip Et</Button>
                        </div>
                        <div className="list">
                            <Card title="Okuduğu Kitaplar" >
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/huzursuzluk.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/istanbulhatirasi.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/doriangrey.webp"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/olasılıksız.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/sekerportakali.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/semaver.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/1984-1.jpg"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/insanneileyasar.jfif"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/nutuk.jfif"} /></Card.Grid>
                                <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/sefiller-1.jfif"} /></Card.Grid>
                            </Card>
                        </div>
                        <div className="list-1">
                            <Title className="list-title" level={5}>Yazarlarına Göre Okudukları</Title>
                            <List
                                itemLayout="horizontal"
                                dataSource={photo}
                                renderItem={(photo, icon) => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={photo.icon} />}
                                            title={<a href=" ">{photo.title}</a>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                        <div className="list-2">
                            <Title level={5}>Türlerine Göre Okudukları</Title>
                            <List
                                size="small"
                                dataSource={datas}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </div>
                        <div>
                            <div className="list-3">
                                <Card title="Okuyacağı Kitaplar">
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/birkedibiradambirolum.jpg"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/engeregingozu.jpg"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/oyunlarlayasayanlar.jpg"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/gogebakmaduragi.webp"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/doriangrey.webp"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/birbilimadamininromani.jpg"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/madalyonunici.webp"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/dokuzakadaron.webp"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/sircakosk.webp"} /></Card.Grid>
                                    <Card.Grid style={gridStyle}><img alt=" " className="photo" src={"./assets/sevdasozleri.webp"} /></Card.Grid>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Profile;
