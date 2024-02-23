import "../components/App.css";
import "../components/style.scss";
import { Layout, Button } from "antd";
import {
    SettingOutlined,
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    CloseOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Typography } from "antd";
import { Badge } from 'antd';



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

function Alisveris() {

    const [badgeCount, setBadgeCount] = useState(0);
    useEffect(() => {
        const shop = JSON.parse(localStorage.getItem("shop")) || [];
        setBadgeCount(shop.length);
    }, []);

    const [shopBooks, setShopBooks] = useState([]);


    useEffect(() => {
        const shopBooksJSON = localStorage.getItem("shop");
        if (shopBooksJSON) {
            const shopBooks = JSON.parse(shopBooksJSON);
            const updatedShopBooks = shopBooks.map(book => {
                const miktar = 1;
                const birimFiyat = parseFloat(book.fiyat);
                const toplam = `${miktar * birimFiyat} TL`;
                return {
                    ...book,
                    photo: book.photo,
                    ürün: book.adi,
                    miktar: 1,
                    birimfiyati: birimFiyat,
                    toplam: toplam,
                };
            });
            setShopBooks(updatedShopBooks);
        }
    }, []);

    function removeRow(rowId) {
        const updatedRows = shopBooks.filter(book => book.id !== rowId);
        localStorage.setItem("shop", JSON.stringify(updatedRows));
        setShopBooks(updatedRows);

        setBadgeCount(prevCount => prevCount - 1); /* sepetteki değeri 1 azalt*/
    }

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
        {
            title: '',
            dataIndex: 'fonksiyon',
            render: (_, record) => (
                <CloseOutlined type="link" onClick={() => removeRow(record.id)} />
            ),
        },
    ];

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
    const hasSelected = selectedRowKeys.length > 0;

    if (shopBooks === null || shopBooks.length === 0) {
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
                            SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR.
                        </Typography.Title>
                    </Content>
                </Layout>
                <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
            </Layout>
        )
    }

    let topla = 0;    /*toplam count değerini aldık.  */
    shopBooks.map(book => {
        topla += parseFloat(book.toplam) || 0;
    });

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
                                        float: "left",
                                        marginLeft: 45,
                                    }}
                                >
                                    {hasSelected ? `${selectedRowKeys.length} ürün seçtiniz` : ''}
                                </span>
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={shopBooks} rowKey={"id"} />
                            <h3 className="total">Toplam: {topla.toFixed(2)} TL</h3>
                            <Link to="/Payment"><Button type="primary">Satın al</Button></Link>
                        </div >
                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Alisveris;
