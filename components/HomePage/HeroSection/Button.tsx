import React from "react";

interface IProps {
  text: string;
  textColor: string;
  bgColor: string;
  hoverStyle?: string;
  icon?: any;
}

const Button = ({ text, icon, textColor, bgColor, hoverStyle }: IProps) => {
  return (
    <button
      className={`${bgColor} ${textColor} px-8 py-3 rounded-3xl text-lg font-medium flex items-center justify-center gap-2 ${hoverStyle} transition-all duration-300 w-72 z-10`}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  );
};

export default Button;
