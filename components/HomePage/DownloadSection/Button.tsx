import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Button = () => {
  return (
    <button className="w-full md:w-auto md:px-8 flex items-center justify-center gap-2 text-white font-medium text-lg bg-secondary rounded-full py-4 hover:opacity-80 hover:shadow-xl transition-all duration-300 ease-out">
      <AiOutlineDownload className="text-2xl" />
      <span>Google Play'den İndir</span>
    </button>
  );
};

export default Button;
