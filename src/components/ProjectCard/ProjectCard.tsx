import React from "react";

import { IProject } from "../../content/projects";
import "./ProjectCard.scss";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const createNormalizedString = (arr: string[]) => {
    if (arr.length === 0) return "None";
    return arr.reduce((sum, tech, index, array) => {
      const isEnd = !!(index === array.length - 1);
      sum += tech += !isEnd ? ", " : "";
      return sum;
    }, "");
  };
  return (
    <div className="project-card-container">
      <div className="image-container">
        <img src={project.images[0]} alt="Chat App " />
        <div className="demo-btn-group">
          <a
            href={project.liveDemoLink}
            target="_blank"
            rel="noreferrer"
            className="demo-btn live"
          >
            LIVE DEMO
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            className="demo-btn code"
          >
            SHOW CODE{" "}
          </a>
        </div>
      </div>
      <div className="info-container">
        <div className="name-container">
          <h2>{project.name}</h2>
        </div>
        <div className="description-container">
          <h3>DESCRIPTION: </h3>
          <p>{project.description}</p>
        </div>
        <div className="frontend-container">
          <h3>FRONTEND: </h3>
          <p>{createNormalizedString(project.technologies.frontend)}</p>
        </div>
        <div className="backend-container">
          <h3>BACKEND: </h3>
          <p>{createNormalizedString(project.technologies.backend)}</p>
        </div>
      </div>
    </div>
  );
};
