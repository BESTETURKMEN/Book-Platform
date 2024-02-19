import React from 'react';
import {
    HeartOutlined,
    HomeOutlined,
    PhoneOutlined,
  } from "@ant-design/icons";
import {Link} from 'react-router-dom';

const headerStyle = {
    textAlign: "center",
    fontSize: "28px",
    backgroundColor: "#f2f2f2",
  };


function Header() {
  return (
    <Header
    style={headerStyle}
    actions={[
      <HeartOutlined key="likes" />,
      <HomeOutlined key="home" />,
      <PhoneOutlined key="phone" />,
    ]}
  >
    MY BOOK PLATFORM
    <Link to="/Contact"><PhoneOutlined className="phone"/></Link>
    <Link to="/Favoriler"><HeartOutlined className="heart" /></Link>
    <Link to="/Home"><HomeOutlined className="home" /></Link>
  </Header>
  )
}

export default Header
