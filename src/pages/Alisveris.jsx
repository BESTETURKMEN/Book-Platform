import "../components/App.css";
import "../components/style.scss";
import { Layout, Button } from "antd";
import {
    SettingOutlined,
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Typography } from "antd";


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

const columns = [
    {
        title: 'Ürün',
        dataIndex: 'ürün',
    },
    {
        title: 'Miktar',
        dataIndex: 'miktar',
    },
    {
        title: 'Birim Fiyatı',
        dataIndex: 'fiyat'
    },
    {
        title: 'Toplam',
        dataIndex: 'toplam',
    },
];


function Alisveris() {

    const [shopBooks, setShopBooks] = useState([]);
    useEffect(() => {
        const shopBooks = JSON.parse(localStorage.getItem("shop"));
        const updatedShopBooks = shopBooks.map(book => {
            const miktar = 1;
            const birimFiyat = parseFloat(book.fiyat);
            const toplam = `${miktar * birimFiyat} TL`;
            return {
                ...book,
                ürün: book.adi,
                miktar: 1,
                birimfiyati: birimFiyat,
                toplam: toplam
            };
        });
        setShopBooks(updatedShopBooks);
    }, []);


    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
        const updatedShopBooks = shopBooks.map(book => {
            const newTotal = `${(book.miktar) * (parseFloat(book.birimfiyati) || 0)} TL`;
            return {
                ...book,
                toplam: newTotal,
            };
        });
        setShopBooks(updatedShopBooks);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    // const hasSelected = selectedRowKeys.length > 0;

    // if (shopBooks === null || shopBooks.length === 0) {
    //     return (
    //         <Layout style={layoutStyle}>
    //             <Header
    //                 style={headerStyle}
    //                 actions={[
    //                     <HeartOutlined key="heart" />,
    //                     <HomeOutlined key="home" />,
    //                     <PhoneOutlined key="phone" />,
    //                 ]}
    //             >
    //                 MY BOOK PLATFORM
    //                 <Link to="/Alisveris"><ShoppingCartOutlined className="shop" /></Link>
    //                 <Link to="/Contact">
    //                     <PhoneOutlined className="phone" />
    //                 </Link>
    //                 <Link to="/Likes">
    //                     <HeartOutlined className="heart" />
    //                 </Link>
    //                 <Link to="/Home">
    //                     <HomeOutlined className="home" />
    //                 </Link>
    //             </Header>
    //             <Layout>
    //                 <Sider style={siderStyle}>
    //                     <Menu
    //                         mode="vertical"
    //                         items={items}
    //                     />
    //                 </Sider>
    //                 <Content style={contentStyle}>
    //                     <Typography.Title
    //                         level={3}
    //                         style={{
    //                             margin: 0,
    //                         }}
    //                     >
    //                         SEPETİNİZDE HİÇBİR ÖĞE BULUNMAMAKTADIR.
    //                     </Typography.Title>
    //                 </Content>
    //             </Layout>
    //             <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
    //         </Layout>
    //     )
    // }

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
                    <div className="shoptitle">
                        <Typography.Title
                            level={3}
                        >
                            Sepetim
                        </Typography.Title>
                        <div className="alisveris">
                            <div
                                style={{
                                    marginBottom: 16,
                                }}
                            >
                                <span
                                    style={{
                                        marginLeft: 8,
                                    }}
                                >
                                    {/* {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''} */}
                                </span>
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={shopBooks} rowKey={"id"} />
                            <h3 className="total">Toplam: {shopBooks.toplam} </h3>
                            <Button type="primary">Satın al</Button>
                        </div >
                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Alisveris;
