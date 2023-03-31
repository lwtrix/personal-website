import React, { forwardRef, useState } from "react";
import { BsGithub } from "react-icons/bs";

import "./portfolio.css";

const Portfolio = ({}, ref) => {
  const projects = [
    {
      name: "spotify clone",
      technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
      description:
        "Spotify clone made with HTML, CSS and a touch of JavaScript. Includes three pages: home, artist and album page. Features a search input to look up songs. Comes with a responsive design across all dimensions.",
      thumbnail:
        "https://res.cloudinary.com/dhlvd5ym6/image/upload/v1680263497/zpotify_nqmzhe.png",
    },
    {
      name: "linkedin clone",
      technologies: ["React", "Redux", "NodeJS", "Express", "Mongoose", "Bootstrap"],
      description:
        "Full-stack LinkedIn clone with users, posts and experiences resources, and a clean, responsive interface. Includes features such as: posting on feed, searching for users, edit profile and add or edit experiences.",
      thumbnail:
        "https://res.cloudinary.com/dhlvd5ym6/image/upload/v1680263508/linkedin_ssllfj.png",
    },
  ];

  const [displayProject, setDisplayProject] = useState(projects[0]);

  const handleSetProject = (name) => {
    const project = projects.find((p) => p.name === name);
    setDisplayProject(project);
  };

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
      <h2 className="section-heading">Portfolio</h2>
      <div className="projects-links">
        {console.log(displayProject)}
        {projects.map((project) => (
          <span
            className={`${displayProject.name === project.name ? 'link selected' : 'link'}`}
            onClick={(e) => handleSetProject(project.name)}
          >
            {project.name}
          </span>
        ))}
      </div>
      <div className="project-display">
        <div className="thumbnail-container">
          <img
            alt={`${displayProject.name} thumbnail`}
            src={displayProject.thumbnail}
          />
        </div>
        <div className="project-details">
          <p className="name">{displayProject.name}</p>
          <div className="tech-list">
            {displayProject.technologies.map((t) => (
              <span className="tech">{t}</span>
            ))}
          </div>
          <div className="description-container">
            <span className="label">Description</span>
            <p className="text">{displayProject.description}</p>
          </div>
          <div className="controls">
            <div className="icon-container">
              <BsGithub className="icon" />
            </div>
            <button className="demo-btn">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Portfolio);
