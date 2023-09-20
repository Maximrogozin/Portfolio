import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useLanguage } from "./hooks/UseLang";

const Main = () => {
  const { language } = useLanguage();
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover md:object-left md:scale-x-[-1] "
        src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 dark:bg-black/50">
        <div className="max-w-[500px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-[#001b5e] dark:text-red-200">
          <h4>
            {language === "en"
              ? "Hello everyone, my name is"
              : "Всем привет, меня зовут"}
          </h4>
          <h1 className="sm:text-6xl text-4xl font-bold text-[#001b5e] dark:text-gray-300">
            {language === "en" ? "Maxim" : "Максим"}
          </h1>
          {/* <h2 className="flex sm:tex-3xl text-2xl pt-4 text-[#001b5e] dark:text-green-300">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2> */}
          <h2 className="flex text-center">
            {language === "en"
              ? "I develop responsive and functional websites."
              : "Я разрабатываю адаптивные и функциональные сайты."}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
