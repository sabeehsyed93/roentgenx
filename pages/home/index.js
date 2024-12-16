import React from "react";
import Context from "@/context/Context";

import PageHead from "../Head";

import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";

const HomePage = () => {
  return (
    <>
      <PageHead title="Home" />

      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
          />
          <PopupMobileMenu />

          <Home />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default HomePage;
