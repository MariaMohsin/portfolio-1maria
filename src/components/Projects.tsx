


import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "E-Commerce",
        desc: "A Javascript based website for managing and organizing your tasks efficiently.",
        img: "/e-commerce.png",
        tags: ["Node", "CSS", "Javascript"],
    },
    {
        id: 1,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript website to track time with an interactive countdown feature.",
        img: "/countdown.png",
        tags: ["Next.Js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Pakola Website",
        desc: "A Basic HTML and Bootstrap-based website for sales and purchasing.",
        img: "/pakola.png",
        tags: ["HTML", "Node", "Bootstrap"],
    },
    {
        id: 3,
        title: "Safari Project",
        desc: "An HTML and Javascript website for booking rides and experiencing Dubai desert safari.",
        img: "/safari.png",
        tags: ["HTML", "Node", "CSS", "Javascript"],
    },
    {
        id: 4,
        title: "Static Interactive Resume",
        desc: "A basic Typescript-based interactive resume built with HTML and CSS, showcasing skills dynamically.",
        img: "/resume.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 5,
        title: "Simple Calculator Project",
        desc: "A basic HTML, CSS, and Typescript calculator for performing arithmetic operations.",
        img: "/pic.png",
        tags: ["HTML", "Node", "CSS", "Typescript"],
    },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="container mx-auto pt-32">
      <Heading title="My Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {data.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            desc={project.desc}
            img={project.img}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
