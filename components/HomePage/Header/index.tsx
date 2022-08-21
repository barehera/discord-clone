import React, { useState } from "react";
import Button from "./Button";
import Logo from "../UI/Logo";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";

const index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className=" bg-primary">
      <div className="lg:hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="p-6 h-20 flex items-center justify-between max-w-6xl mx-auto">
        <Logo color="text-white" />
        <div className="hidden lg:block">
          <Navigation />
        </div>

        <div className="flex items-center gap-4">
          <Button />
          <div className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
