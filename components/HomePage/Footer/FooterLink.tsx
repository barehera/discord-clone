import React from "react";

interface IProps {
  text: string;
}

const FooterLink = ({ text }: IProps) => {
  return (
    <div className="text-white text-base cursor-pointer hover:underline">
      {text}
    </div>
  );
};

export default FooterLink;
