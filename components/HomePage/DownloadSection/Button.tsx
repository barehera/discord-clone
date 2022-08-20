import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Button = () => {
  return (
    <button className="w-full flex items-center justify-center gap-2 text-white font-medium text-lg bg-secondary rounded-full py-4 hover:opacity-80 hover:shadow-xl transition-all duration-300 ease-out">
      <AiOutlineDownload className="text-2xl" />
      <span>Windows için indir</span>
    </button>
  );
};

export default Button;
