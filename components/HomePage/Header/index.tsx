import React, { useState } from "react";
import Button from "./Button";
import Logo from "../UI/Logo";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";

const index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <header className="p-6 h-20 flex items-center justify-between bg-primary">
        <div className="flex-1">
          <Logo color="text-white" />
        </div>
        <div className="flex items-center gap-4">
          <Button />
          <div onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </div>
        </div>
      </header>
    </div>
  );
};

export default index;
