import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SmallNav = () => {
  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  return (
    <>
      <nav className="mainmenu-nav">
        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
          <li>
            <Link href="/">
              <i className="feather-home"></i>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="feather-info"></i>
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link href="/upcoming-projects">
              <i className="feather-calendar"></i>
              <span>Upcoming Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SmallNav;
