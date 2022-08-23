import React from "react";
import turkeyIcon from "assets/images/turkey.png";
import Image from "next/image";

import { BsChevronCompactDown } from "react-icons/bs";

const Languages = () => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer mb-6"
      onClick={() => {
        alert("Turkey");
      }}
    >
      <Image
        src={turkeyIcon}
        width="26px"
        height="16px"
        className="object-cover rounded-sm"
        alt="Turkey Icon"
      />
      <p className="text-xs">Türkçe</p>
      <BsChevronCompactDown className="text-sm" />
    </div>
  );
};

export default Languages;
