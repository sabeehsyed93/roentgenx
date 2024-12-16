import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import menuImg from "../../public/images/menu-img/menu-img-2.png";
import logoBlack from "../../public/images/logo/logo-black.svg";
import logoWhite from "../../public/images/logo/logo-white.svg";
import { useAppContext } from "../../context/Context";

const Nav = () => {
  const router = useRouter();
  const { isLightTheme } = useAppContext();

  const isActive = (href) => router.pathname === href;

  return (
    <>
      <ul className="mainmenu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/upcoming-projects">Upcoming Projects</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;
