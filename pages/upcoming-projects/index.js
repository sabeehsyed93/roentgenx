import React from "react";
import Context from "@/context/Context";
import PageHead from "../Head";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import UpcomingProjects from "@/components/UpcomingProjects/UpcomingProjects";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";

const UpcomingProjectsPage = () => {
  return (
    <>
      <PageHead title="Upcoming Projects - RoentgenX" />
      
      <main className="page-wrapper">
        <Context>
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
          />
          <PopupMobileMenu />
          
          <Breadcrumb 
            title="Innovation in Progress"
            text="Upcoming Projects"
          />

          <UpcomingProjects />

          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export default UpcomingProjectsPage;
