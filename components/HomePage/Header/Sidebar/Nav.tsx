import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavItem text="Ana Sayfa" selected={true} />
        <NavItem text="İndir" selected={false} />
        <NavItem text="Nitro" selected={false} />
        <NavItem text="Keşfet" selected={false} />
        <NavItem text="Güvenlik" selected={false} />
        <NavItem text="Moderatör Akademisi" selected={false} />
        <NavItem text="Destek" selected={false} />
        <NavItem text="Blog" selected={false} />
        <NavItem text="Kariyerler" selected={false} />
      </ul>
    </nav>
  );
};

export default Nav;
