import React from "react";

interface IProps {
  text: string;
  selected: boolean;
}

const NavItem = ({ text, selected }: IProps) => {
  const selectedStyle = selected
    ? "bg-gray-100 text-blue-400"
    : "text-gray-500";

  return (
    <li
      className={`${selectedStyle} w-full hover:underline cursor-pointer py-2 px-3 rounded-lg text-base `}
    >
      {text}
    </li>
  );
};

export default NavItem;
