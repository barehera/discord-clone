import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Button = () => {
  return (
    <button className="flex items-center justify-center gap-2 bg-secondary text-white text-sm font-semibold  w-full py-2 rounded-2xl hover:opacity-70 hover:shadow-xl transition-all duration-300">
      <AiOutlineDownload className="text-2xl" />
      <span>Windows için indir</span>
    </button>
  );
};

export default Button;
