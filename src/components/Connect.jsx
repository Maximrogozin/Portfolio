import React from "react";
import {
  FaTelegram,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useLanguage } from "./hooks/UseLang";

const Connect = () => {
  const { language } = useLanguage();
  return (
    <div
      id="footer"
      className="px-4 py-20 text-center mx-auto w-full bg-white border-t border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark-bd-gray-900"
    >
      <h3 className="font-bold text-gray-800 uppercase text-2xl dark:text-white">
        {language === "en" ? "LET'S CONNECT!" : "Связаться"}
      </h3>
      <div className="flex justify-center py-5 mb-4">
        <div className="flex justify-between pt-6 max-w-[300px] w-full">
          <a
            href="https://t.me/Autmaxcapital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram
              className="cursor-pointer hover:text-blue-600 dark:text-white"
              size={50}
            />
          </a>
          <a
            href="https://instagram.com/maximrogozin?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="cursor-pointer hover:text-blue-600 dark:text-white"
              size={50}
            />
          </a>
          <a
            href="https://github.com/Maximrogozin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="cursor-pointer hover:text-blue-600 dark:text-white"
              size={50}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC-%D1%80%D0%BE%D0%B3%D0%BE%D0%B7%D0%B8%D0%BD-441122291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              className="cursor-pointer hover:text-blue-600 dark:text-white"
              size={50}
            />
          </a>
        </div>
      </div>
      <p className="dark:text-white">
        {language === "en"
          ? "Build with Maxim Rogozin"
          : "Создал Максим Рогозин"}{" "}
        © 2023{" "}
      </p>
      <p className="dark:text-white">
        {language === "en" ? "Powered by" : "Работает на"}{" "}
        <a
          className="text-blue-600 cursor-pointer"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        &{" "}
        <a
          className="text-blue-600 cursor-pointer"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>{" "}
      </p>
      <p className="dark:text-white">
        {language === "en" ? "Hosted by" : "Хостинг предоставлен"}{" "}
        <a
          className="text-blue-600 cursor-pointer"
          href="https://www.stormkit.io/#pricing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stormkit
        </a>{" "}
      </p>
      <div className="px-4 max-w-[250px] mx-auto">
        <a
          href="#main"
          className="text-[#214ecf] dark:text-white border-2 text-xl hover:bg-[#bbd2ff] hover:border-[#bbd2ff] flex items-center justify-center border-[#214ecf] dark:border-white rounded-full py-2 mt-8 mb-8 duration-300"
        >
          {language === "en" ? "Back to top" : "Вернуться наверх"}
        </a>
      </div>
    </div>
  );
};

export default Connect;
