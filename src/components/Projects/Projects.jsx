// src/Projects.js
import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
  {
    title: "How To Make Flyer Design",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...",
    tags: ["Typescript", "ReactJs", "NextJs", "CSS", "HTML", "MongoDB"],
    image: "/project1.png",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
        Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
