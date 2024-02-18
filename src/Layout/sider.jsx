import React from 'react';
import { Menu } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
  } from "@ant-design/icons";
  
  const siderStyle = {
    textAlign: "center",
    color: "#ffffff",
  };

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


function Sider() {
  return (
    <Sider width="20%" style={siderStyle}>
    <Menu
      style={{
        width: 256,
      }}
      mode="vertical"
      items={items}
    />
  </Sider>
  )
}

export default Sider
