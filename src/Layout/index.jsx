import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Sider from "./sider";

function Index() {
  return (
    <Layout>
      <Layout.Header>
        <Header />
        <Layout.Header />
        <Layout.Sider>
          <Sider />
        </Layout.Sider>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout.Header>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default Index;
