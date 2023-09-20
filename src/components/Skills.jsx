import React from "react";
import HTML from "../assets/HTML.svg.png";
import CSS from "../assets/CSS3.svg.png";
import JAVASCRIPT from "../assets/JavaScript.svg.png";
import REACT from "../assets/react.svg";
import GITHUB from "../assets/github.svg.png";
import BOOTSTRAP from "../assets/Bootstrap.svg.png";
import MUI from "../assets/material.png";
import TAILWIND from "../assets/TAILWIND.svg";
import { useLanguage } from "./hooks/UseLang";

const Skills = () => {
  const { language } = useLanguage();
  return (
    <div
      id="skills"
      className="text-[#001b5e] dark:text-white py-12 dark:bg-gray-900"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline items-center">
            {language === "en"
              ? "MY ACTUAL STACK"
              : "Технологии с которыми я работал"}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-20">
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={HTML}
              alt="html_icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={CSS}
              alt="css_icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={JAVASCRIPT}
              alt="javascript_icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={REACT}
              alt="react_icon"
            />
            <p className="my-4">REACT</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500 dark:bg-gray-50"
              src={GITHUB}
              alt=""
            />
            <p className="my-4">GITHUB</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={TAILWIND}
              alt="tailwind_icon"
            />
            <p className="my-4">TAILWIND</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={BOOTSTRAP}
              alt="bootstrap_icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div>
            <img
              className="w-20 mx-auto  hover:scale-150 duration-500"
              src={MUI}
              alt="mui_icon"
            />
            <p className="my-4">MUI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
