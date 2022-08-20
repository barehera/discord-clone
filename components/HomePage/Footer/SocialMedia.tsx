import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4 text-2xl text-white">
      <AiOutlineTwitter className="cursor-pointer" />
      <AiOutlineInstagram className="cursor-pointer" />
      <AiFillFacebook className="cursor-pointer" />
      <AiFillYoutube className="cursor-pointer" />
    </div>
  );
};

export default SocialMedia;
