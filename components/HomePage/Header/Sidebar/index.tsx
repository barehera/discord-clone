import Logo from "components/HomePage/UI/Logo";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import Nav from "./Nav";

const index = ({ sidebarOpen, setSidebarOpen }: any) => {
  const sidebarStyle = `${
    sidebarOpen ? "w-8/12" : "w-0 opacity-0 invisible"
  }  fixed right-0 top-0 bg-white rounded-l-lg h-screen p-6 transition-all duration-300 bg-white z-50`;

  return (
    <aside className={sidebarStyle}>
      <div className={`${sidebarOpen ? "flex" : "hidden"} flex-col h-full `}>
        <div className="flex items-center justify-between border-b border-gray-200 pb-6">
          <Logo color="text-black" />
          <AiOutlineClose
            className="text-xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        <div className="py-3 flex-1">
          <Nav />
        </div>

        <div>
          <Button />
        </div>
      </div>
    </aside>
  );
};

export default index;
