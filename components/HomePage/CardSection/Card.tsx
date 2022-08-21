import Image from "next/image";
import React from "react";

interface IProps {
  text: string;
  image: string;
  bgColor?: string;
  title: string;
  reverse?: boolean;
}

const Card = ({ image, bgColor, title, text, reverse }: IProps) => {
  return (
    <div
      className={`${
        bgColor ? bgColor : "bg-white"
      } px-6 pt-20 pb-10 flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }  items-center gap-x-12`}
    >
      <div className="relative w-full h-72 mb-7 md:flex-1">
        <Image src={image} layout="fill" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-dark-primary font-black mb-6 md:text-5xl md:font-bold md:leading-[3.7rem]">
          {title}
        </h3>
        <p className="text-base text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default Card;
