import React from "react";

import Carousel from "react-elastic-carousel";
import { config } from "../../content";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Projects.scss";

interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = () => {
  const { projects } = config;
  return (
    <div className="projects-wrapper">
      <h1>ПРОЕКТЫ</h1>
      <div className="projects-container">
        <Carousel itemsToShow={1} isRTL={false}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
