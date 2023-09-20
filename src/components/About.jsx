import React from "react";
import avatar from "../assets/ava.jpg";
import { useLanguage } from "./hooks/UseLang";

const About = () => {
  const { language } = useLanguage();

  return (
    <div
      id="about"
      className="border-t border-gray-400 dark:border-gray-800 py-10 text-[#001b5e] dark:text-white dark: dark:bg-gray-900"
    >
      <div className="flex flex-col mx-auto max-w-[1040px] items-center space-y-4">
        <img src={avatar} alt="ava" className="w-48 h-48 rounded-full" />
        <p className="text-lg font-semibold text-center mx-2">
          {language === "en"
            ? "Hello! I'm Maxim Rogozin, Front-end developer."
            : "Привет! Я Максим Рогозин, я Front-end разработчик."}
        </p>
        {language === "en" ? (
          <p className="text-center font-semibold mx-5">
            I specialize in building reliable and scalable React applications
            with a flexible architecture. <br />I have a keen interest in adding
            new functionality to applications.
            <br /> I have basic knowledge in backend development.
            <br /> I actively stay updated with new technologies and <br />
            I'm on the lookout for interesting projects to contribute to.
          </p>
        ) : (
          <p className="text-center mx-5">
            Я специализируюсь на создании надежных и масштабируемых <br />
            React-приложений, с гибкой архитектурой. <br />
            Мне интересно добавление новой функциональности в приложения. <br />
            У меня есть базовые знания в области backend-разработки. <br />Я
            активно слежу за новыми технологиями и всегда готов принять участие
            в интересных проектах.
          </p>
        )}
      </div>
    </div>
  );
};

export default About;
