import Image from "next/image";
import React from "react";

interface IProps {
  text: string;
  image: string;
  bgColor?: string;
  title: string;
}

const Card = ({ image, bgColor, title, text }: IProps) => {
  return (
    <div className={`${bgColor ? bgColor : "bg-white"} px-6 pt-20 pb-10`}>
      <div className="relative w-full h-72 mb-7">
        <Image src={image} layout="fill" />
      </div>
      <div className="mb-6">
        <h3 className="text-xl text-dark-primary font-black">{title}</h3>
      </div>
      <div>
        <p className="text-base text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;
