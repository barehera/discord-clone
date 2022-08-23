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
    <article className={`${bgColor ? bgColor : "bg-white"}  `}>
      <div
        className={`max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-10 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }  md:items-center  md:gap-12 `}
      >
        <div className="relative w-full h-60 mb-7 md:flex-1 lg:flex-2 lg:h-[28rem]">
          <Image src={image} layout="fill" alt="Card Icon" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-dark-primary font-black mb-6 md:text-5xl md:font-bold md:leading-[3.7rem]">
            {title}
          </h3>
          <p className="text-base text-gray-600">{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
