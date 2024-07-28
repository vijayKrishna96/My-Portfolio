import React from "react";

import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { LiaGithubAlt } from "react-icons/lia";

export default function Skill() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node", icon: <FaNodeJs /> },
    { name: "CSS3", icon: <IoLogoCss3 /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind", icon: <RiTailwindCssFill /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <div className="container mx-auto text-white p-10 ">
      <div className="text-center mb-36">
        <h1 className="text-6xl font-bold mb-6">Skills & Experience</h1>
        <p className="mb-12 text-lg">
          The main area of expertise is front end development (client side of
          the web).<br /><br />
          HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins,
          <br /> features, animations, and coding interactive layouts. Visit
          my{" "}
          <a href="https://linkedin.com" className="underline text-blue-400">
            Linkedin
          </a>{" "}
          for more details.
        </p>
      </div>
      <div className="grid gap-10">
        <div className="grid grid-cols-4 gap-20 mb-8">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <div className="text-xl">{skill.name}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-20">
          {skills.slice(4).map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <div className="text-xl">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-16 left-16 m-4 text-4xl">
        <a href="">
        <LiaGithubAlt />
        </a>
      </div>
    </div>
  );
}
