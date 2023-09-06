"use client";

import { useEffect, useState } from "react";
import Hero from "../hero/hero";
import Navbar from "./navbar/navbar";
import Topbar from "./topbar/topbar";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  return (
    <>
      <header className="header -type-5 js-header whiteBg">
        <Topbar />

        <div className="main-content">
          {/* <Navbar /> */}
          {/* <Hero /> */}
        </div>
      </header>
    </>
  );
};

export default Header;
