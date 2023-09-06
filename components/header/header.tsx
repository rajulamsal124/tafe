"use client";

import { useEffect, useState } from "react";
import Hero from "../hero/hero";
import Navbar from "./navbar/navbar";
import Topbar from "./topbar/topbar";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-5 js-header ${
          scrollPosition > 40 ? "bg-dark-1" : "whiteBg"
        } `}
      >
        <Topbar />

        <div className="main-content overflow-hidden   ">
          <Navbar />
          <Hero />
        </div>
      </header>
    </>
  );
};

export default Header;
