"use client";

import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

const Navbar = () => {
  return (
    <div className="container py-10">
      <div className="row justify-between items-center">
        <div className="col-auto">
          <div className="header-left">
            <div className="header__logo ">
              <Link href="/">
                <Image
                  width={140}
                  height={40}
                  src="/assets/img/general/logo.svg"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-auto">
          <div className="header-right d-flex items-center">
            <Menu allClasses={"menu__nav text-green-5 -is-active"} />
            {/* <MobileMenu
              activeMobileMenu={activeMobileMenu}
              setActiveMobileMenu={setActiveMobileMenu}
            />  */}

            <div className="header-right__icons text-white d-flex items-center ml-30">
              {/* <SearchToggle /> */}

              {/* <CartToggle
                parentClassess={"relative ml-30 xl:ml-20"}
                allClasses={"d-flex items-center text-white"}
              /> */}

              <div className="d-none xl:d-block ml-20">
                <button
                  className="text-white items-center"
                  //   onClick={() => setActiveMobileMenu(true)}
                  data-el-toggle=".js-mobile-menu-toggle"
                >
                  <i className="text-11 icon icon-mobile-menu"></i>
                </button>
              </div>
            </div>

            {/* <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none">
              <Link href="/login" className="button -underline text-white">
                Log in
              </Link>
              <Link
                href="/signup"
                className="button px-25 h-50 -white text-dark-1 -rounded ml-30 xl:ml-20"
              >
                Sign up
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
