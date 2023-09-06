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
    <div className="header-menu">
      <div className="header_menu__content">
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
