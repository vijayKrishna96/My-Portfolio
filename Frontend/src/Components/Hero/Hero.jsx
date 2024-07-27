import React from "react";
import Skill from "../Skills/Skill";
import Projects from "../Projects/Projects";
import Home from "../Home/Home";

export default function Hero() {
  return (
    <>
      <section className="h-screen">
          <Home/>
      </section>

      <section className="h-screen">
        <Skill />
      </section>

      <section className="h-screen">
        <Projects />
      </section>

      <section className="h-screen">
        <Skill />
      </section>


    </>
  );
}
