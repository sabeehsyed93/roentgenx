import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/Context";

import logoLight from "../../public/images/logo/logo.png";
import logoDark from "../../public/images/light/logo/logo-dark.png";

import Nav from "./Nav";
import SmallNav from "./SmallNav";

const PopupMobileMenu = () => {
  const { activeMobileMenu, setActiveMobileMenu, isLightTheme } = useAppContext();

  // Remove the resize handler as it's causing the flash
  useEffect(() => {
    // Close mobile menu on mount
    setActiveMobileMenu(false);
  }, []);

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? "active" : ""}`}>
        <div className="bg" onClick={() => setActiveMobileMenu(false)}></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image
                  className="logo-light"
                  src={isLightTheme ? logoLight : logoDark}
                  width={116}
                  height={30}
                  alt="Corporate Logo"
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(false)}
              >
                <i className="feather-x"></i>
              </button>
            </div>
          </div>
          <Nav />
          <SmallNav />
        </div>
      </div>
    </>
  );
};

export default PopupMobileMenu;
