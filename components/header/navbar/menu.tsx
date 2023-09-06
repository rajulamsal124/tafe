import React from "react";
import Link from "next/link";
import routes from "@/routes/routes";

// MenuProps interface
interface MenuProps {
  allClasses?: string;
  headerPosition?: string;
}

// Route interface
interface Route {
  href: string;
  label: string;
}

const Menu: React.FC<MenuProps> = ({ allClasses, headerPosition }) => {
  return (
    <div className={`header-menu ${headerPosition ? headerPosition : ""}`}>
      <div className="header_menu__content">
        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link href="/login">Log in</Link>
          <Link href="/signup" className="ml-30">
            Sign Up
          </Link>
        </div>
        <div className="menu">
          <ul className={`navbar-nav ${allClasses ? allClasses : ""}`}>
            {routes.map((route: Route, index: number) => (
              <li className="nav-item menu__nav" key={index}>
                <Link href={route.href}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
