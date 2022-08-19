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
    <div className={`${bgColor ? bgColor : "bg-white"} py-24 px-6`}>
      <div className="relative w-full h-60 mb-2">
        <Image src={image} layout="fill" />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div>
        <p className="text-base text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default Card;
