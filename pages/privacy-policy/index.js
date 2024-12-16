import React from "react";
import PageHead from "../Head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Context from "@/context/Context";

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageHead title="Privacy Policy" />
      <Context>
        <Header />
        <main className="page-wrapper">
          <div className="rainbow-about-area rainbow-section-gap">
            <div className="container">
              <PrivacyPolicy />
            </div>
          </div>
        </main>
        <Footer />
        <Copyright />
      </Context>
    </>
  );
};

export default PrivacyPolicyPage;
