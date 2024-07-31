import React from "react";
import Skill from "../Skills/Skill";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";
import ScrollManager from "../ScrollManager/ScrollManager";

export default function Hero() {
  return (
    <>

      <ScrollManager/>

      <Home />
 
      <Skill />

      <Projects/>

    </>
  );
}
