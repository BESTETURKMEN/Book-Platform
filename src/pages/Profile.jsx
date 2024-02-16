import "../components/App.css";
import "../components/style.scss";
import { Layout } from "antd";
import { Card } from 'antd';

import {
    AppstoreOutlined,
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
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';



const gridStyle = {
    width: '50%',
    textAlign: 'center',

};



const { Title, Text } = Typography;


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
    getItem("Ayarlar", "sub4", <SettingOutlined />, [getItem("Gizlilik", "13", <Link to="/Gizlilik"></Link>)]),

    getItem('Profil', 'sub5', <UserOutlined />, [getItem("Profil", "14", <Link to="/Profile"></Link>)]),
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


function Profile() {
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
                    <div className="border">
                        <div className="border-header"></div>
                        <div className="profile-icon"> <Avatar
                            size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }}
                            icon={<AntDesignOutlined />}
                        /></div>
                        <div className="text"><Title level={4}>Username</Title></div>
                        <div className="text-area"><Text type="secondary">@username</Text></div>
                        <div className="icons">
                            <UploadOutlined className="upload" />
                            <MailOutlined className="mail" />
                            <Button className="follow" type="primary">Takip Et</Button>
                        </div>
                        <div>
                            <Card title="Okuduğu Kitaplar">
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid hoverable={false} style={gridStyle}>
                                    Content
                                </Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                                <Card.Grid style={gridStyle}>Content</Card.Grid>
                            </Card>
                        </div>
                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Profile;