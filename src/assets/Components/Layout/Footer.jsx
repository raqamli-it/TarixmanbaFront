import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" bg-[#0a1821] min-h-40 flex">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#" className="text-white">
          Aqlli kutubxona
        </a>

        <p className="text-sm text-white dark:text-white">
          © Copyright 2023. Barcha huquqlar RL tomonidan himoyalangan
        </p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-white  rounded-[50%] flex justify-center items-center w-[20px] h-[20px] bg-transparent p-[0] hover:bg-white hover:text-black  transition-colors duration-300 "
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="mx-2 text-white  rounded-[50%] flex justify-center items-center w-[20px] h-[20px] bg-transparent p-[0] hover:bg-white hover:text-black  transition-colors duration-300"
          >
            <SlSocialFacebook />
          </a>

          <a
            href="#"
            className="mx-2 text-white  rounded-[50%] flex justify-center items-center w-[20px] h-[20px] bg-transparent p-[0] hover:bg-white hover:text-black  transition-colors duration-300"
          >
            <LiaTelegram />
          </a>
          <a
            href="#"
            className="mx-2 text-white  rounded-[50%] flex justify-center items-center w-[20px] h-[20px] bg-transparent p-[0] hover:bg-white hover:text-black  transition-colors duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
