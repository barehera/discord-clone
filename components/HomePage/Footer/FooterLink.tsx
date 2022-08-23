import React from "react";

interface IProps {
  text: string;
}

const FooterLink = ({ text }: IProps) => {
  return (
    <li className="text-white text-base cursor-pointer hover:underline">
      {text}
    </li>
  );
};

export default FooterLink;
