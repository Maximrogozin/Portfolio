import React from "react";
import { useLanguage } from "./hooks/UseLang";

const ProjectItem = ({ img, title, stack }) => {
  const { language } = useLanguage();
  return (
    <div className="relative flex items-center justify-start h-auto w-full shadow-xl shadow-gray-400 dark:shadow-gray-800 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <a href="/">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            {language === "en" ? "More Info" : "Смотреть"}
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
