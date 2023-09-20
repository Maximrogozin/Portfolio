import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useLanguage } from "./hooks/UseLang";

const Sidenav = () => {
  const { language } = useLanguage();
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden dark:text-white dark:hover:text-green-600  cursor-pointer hover:scale-150 ease-in duration-200"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 dark:bg-black/75  flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg dark:hover:text-3xl dark:hover:text-green-600 bg-gray-100 dark:bg-red-200 shadow-gray-400 dark:shadow-none m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-blue-400"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">{language === "en" ? "Home" : "Домой"}</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg dark:hover:text-3xl dark:hover:text-green-600 bg-gray-100 dark:bg-red-200 shadow-gray-400 dark:shadow-none m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-blue-400"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">
              {language === "en" ? "Projects" : "Проекты"}
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg dark:hover:text-3xl dark:hover:text-green-600 bg-gray-100 dark:bg-red-200 shadow-gray-400 dark:shadow-none m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-blue-400"
          >
            <BsPerson size={20} />
            <span className="pl-4">
              {language === "en" ? "About" : "Обо мне"}
            </span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg dark:hover:text-3xl dark:hover:text-green-600 bg-gray-100 dark:bg-red-200 shadow-gray-400 dark:shadow-none m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:shadow-blue-400"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">
              {language === "en" ? "Contact" : "Связаться"}
            </span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 dark:shadow-gray-700 dark: dark:text-white m-2 p-4 dark:bg-gray-400 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 dark:shadow-gray-700 dark: dark:text-white dark:bg-gray-400 m-2 p-4 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 dark:shadow-gray-700 dark: dark:text-white m-2 p-4 dark:bg-gray-400 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 dark:shadow-gray-700 dark: dark:text-white m-2 p-4  dark:bg-gray-400 cursor-pointer hover:bg-blue-600 hover:text-white hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
