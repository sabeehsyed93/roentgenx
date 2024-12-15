import React from "react";
import Context from "@/context/Context";
import PageHead from "../Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import About from "@/components/About/About";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About Us - RoentgenX" />
      
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
          />
          <PopupMobileMenu />
          
          <Breadcrumb 
            title="Transforming Radiology Admin Through AI"
            text="About Us"
          />

          <About />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default AboutPage;
