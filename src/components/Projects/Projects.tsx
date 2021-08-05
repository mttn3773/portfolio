import React from "react";
import { IProject } from "../../content/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { config } from "../../content";
import "./Projects.scss";
interface ProjectsProps {
  setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

export const Projects: React.FC<ProjectsProps> = ({ setProject }) => {
  const { projects } = config;
  return (
    <div className="projects-wrapper">
      <h1>ПРОЕКТЫ</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} setProject={setProject} project={project} />
        ))}
      </div>
    </div>
  );
};
