import React from "react";
import { useLanguage } from "./hooks/UseLang";
const Language = () => {
  const { language, changeLanguage } = useLanguage();
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };
  return (
    <div>
      <div className="fixed top-1  right-1 px-20  flex flex-row z-20 dark:text-red-200">
        <div className="flex flex-row">
          <button
            className={`w-[75%] flex justify-center items-center font-bold  m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-blue-600 dark:hover:text-green-600 ${
              language === "en" ? "text-blue-600 dark:text-green-600" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
          <span className="w-[75%] flex justify-center items-center font-bold">
            /
          </span>
          <button
            className={`w-[75%] flex justify-center items-center font-bold  m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:text-blue-600 dark:hover:text-green-600 ${
              language === "ru" ? "text-blue-600 dark:text-green-600" : ""
            }`}
            onClick={() => handleLanguageChange("ru")}
          >
            RU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
