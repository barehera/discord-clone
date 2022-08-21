import React from "react";

interface IProps {
  text: string;
}

const DesktopNavItem = ({ text }: IProps) => {
  return (
    <li className="font-semibold hover:underline cursor-pointer">{text}</li>
  );
};

export default DesktopNavItem;
