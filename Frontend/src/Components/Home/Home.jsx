import React from "react";

function Home() {
  return (
    <div className="container mx-auto w-full content grid grid-cols-2">
      <div className="left_content flex flex-col items-center justify-center text-center p-10  text-white h-screen">
          <div className="max-w-2xl">
            <div className="text-4xl md:text-6xl font-bold mb-4 ">
              <span>Hi, I'm Vijay</span>
              <br />
            </div>
            <p className="text-xl mb-4">
              Full Stack Developer / UI-UX Design / Javascript
            </p>
            <p className="mb-4">
              Professionally connected with the web development industry.
            </p>
            <p className="mb-4">
              Problem solver, well-organised person, loyal employee with high
              attention to detail. Fan of Boxing, outdoor activities, video
              games, and coding of course.
            </p>
            <p>
              Interested in the entire frontend spectrum and working on
              ambitious projects with interesting people.
            </p>
          </div>
      </div>
      <div className="right_content  justify-center items-center "></div>
    </div>
  );
}

export default Home;
 