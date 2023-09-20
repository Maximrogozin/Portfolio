import React from "react";
import ProjectItem from "./ProjectItem";
import Img from "../assets/project.png";
import chat from "../assets/chat.png";
import cv from "../assets/cv.png";
import kinomonstr from "../assets/kinomonstr.png";
import galery from "../assets/galery.png";
import todo from "../assets/todo.png";
import { useLanguage } from "./hooks/UseLang";

const Projects = () => {
  const { language } = useLanguage();
  return (
    <div className="bg-white dark:bg-gray-900">
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-20 ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-gray-300 mb-8">
          {language === "en" ? "My projects" : "Мои проекты"}
        </h1>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={Img} title="Workout" stack="React JS" />
          <ProjectItem img={chat} title="Chat Online" stack="React JS" />
          <ProjectItem img={cv} title="Svetlana CV" stack="HTML / CSS" />
          <ProjectItem
            img={kinomonstr}
            title="Film Galery"
            stack="HTML / CSS / JS"
          />
          <ProjectItem img={galery} title="Galery" stack="HTML / CSS / JS" />
          <ProjectItem img={todo} title="Todo App" stack="React JS" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
