import React, { memo } from "react";
import MainLayout from "layouts/MainLayout";
import Header from "./components/Header";
import Footer from "./components/Footer";

const HomeLayout = ({ children, ...props }) => {
  return (
    <MainLayout {...props}>
      <Header />
      {children}
      <Footer />
    </MainLayout>
  );
};

export default memo(HomeLayout);
