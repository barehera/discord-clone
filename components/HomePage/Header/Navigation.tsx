import React from "react";
import DesktopNavItem from "./DesktopNavItem";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex items-center gap-10 text-white">
        <DesktopNavItem text="İndir" />
        <DesktopNavItem text="Nitro" />
        <DesktopNavItem text="Keşfet" />
        <DesktopNavItem text="Güvenlik" />
        <DesktopNavItem text="Destek" />
        <DesktopNavItem text="Blog" />
        <DesktopNavItem text="Kariyerler" />
      </ul>
    </nav>
  );
};

export default Navigation;
