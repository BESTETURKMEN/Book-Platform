import "../components/App.css";
import "../components/style.scss";
import { Layout, Button } from "antd";
import {
    // SettingOutlined,
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
import { InputNumber } from 'antd';

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
    getItem('Profil', 'sub5', <Link to="/BeforeLogin"> <UserOutlined /></Link>),];
// getItem("Ayarlar", "sub4", <Link to="/Ayarlar"><SettingOutlined /></Link>)];

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
    const [shopBooks, setShopBooks] = useState([]);

    useEffect(() => { /*localstorage da shop varsa parse edip sepetin countunu arttır. */
        const shop = localStorage.getItem("shop") || localStorage.getItem([]);
        if (shop !== null || shop !== "[]") {
            const newBadgeCount = JSON.parse(localStorage.getItem("badgeCount"));
            const lastCount = newBadgeCount
            setBadgeCount(lastCount);
        }
    }, []);


    useEffect(() => { /*row daki ürün hesaplaması  */
        const shopBooksJSON = localStorage.getItem("shop");
        if (shopBooksJSON) {
            const shopBooks = JSON.parse(shopBooksJSON);
            const updatedShopBooks = shopBooks.map((book) => {
                const storedMiktar = localStorage.getItem(`miktar_${book.id}`);
                const miktar = storedMiktar !== null && storedMiktar !== "0" ? parseInt(storedMiktar) : 1;
                const birimFiyat = parseFloat(book.fiyat);
                const toplam = `${miktar * birimFiyat} TL`;
                return {
                    ...book,
                    id: book.id,
                    photo: book.photo,
                    ürün: book.adi,
                    miktar: miktar,
                    birimfiyati: birimFiyat,
                    toplam: toplam,
                };
            });
            setShopBooks(updatedShopBooks);
        }
    }, []);

    const onChange = (value, record) => {
        const updatedShopBooks = shopBooks.map((book) => {
            if (book.id === record.id) {
                const birimFiyat = parseFloat(book.fiyat);
                const Counttoplam = `${value * birimFiyat} TL`;
                return {
                    ...book,
                    miktar: value,
                    toplam: Counttoplam,
                };
            }
            return book;
        });
        setShopBooks(updatedShopBooks);


        const shop = localStorage.getItem("shop") || localStorage.getItem([]);
        if (shop !== null || shop !== "[]") {
            /*miktar güncellendiğinde localstagede tutuyoruz. miktar artış sayısı */
            const updatedMiktar = updatedShopBooks.find(book => book.id === record.id).miktar;
            localStorage.setItem(`miktar_${record.id}`, updatedMiktar.toString());

            /*güncel toplam badge sayısı */
            const newBadgeCount = badgeCount + (value - record.miktar);
            localStorage.setItem("badgeCount", newBadgeCount.toString());
            setBadgeCount(newBadgeCount);
        }
    };

    function removeRow(rowId) {
        const updatedRows = shopBooks.filter(book => book.id !== rowId);
        localStorage.setItem("shop", JSON.stringify(updatedRows));
        setShopBooks(updatedRows);

        const shop = localStorage.getItem("shop") || localStorage.getItem([]);
        const JsonShop = JSON.parse(shop)
        setBadgeCount(JsonShop.length)

        if (shop === "[]") {
            localStorage.setItem("badgeCount", "0")
            localStorage.setItem("miktar_1", "0")
            localStorage.setItem("miktar_2", "0")
            localStorage.setItem("miktar_3", "0")
            localStorage.setItem("miktar_4", "0")
            localStorage.setItem("miktar_5", "0")
            localStorage.setItem("miktar_6", "0")
            setBadgeCount(0)

        }

    }

    const columns = [
        {
            title: 'Ürün',
            dataIndex: 'ürün',
        },
        {
            title: 'Miktar',
            dataIndex: 'miktar',
            render: (_, record) => (
                <InputNumber value={record.miktar} onChange={(value) => onChange(value, record)} changeOnWheel />
            ),
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
                    <div>
                        <Typography.Title
                            level={3}
                        >
                            Sepetim
                        </Typography.Title>
                        <div className="table">
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
                            <Link to="/BeforeLogin"><Button type="primary">Satın al</Button></Link>
                            <h3 className="total">Toplam: {topla.toFixed(2)} TL</h3>

                        </div>
                    </div>
                </Content>
            </Layout>
            <Footer style={footerStyle}>Created by Beste Türkmen</Footer>
        </Layout>
    );
}

export default Alisveris;
