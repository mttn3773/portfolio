import React from "react";
import { useState } from "react";
import { IProject } from "../../content/projects";
import "./ProjectCard.scss";
interface ProjectCardProps {
  project: IProject;
  setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  setProject,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="project-card-wrapper"
    >
      <div className={`project-card-container ${hover ? "blured" : ""}`}>
        <h1 style={{ color: "rgb(53, 140, 214)" }}>{project.name}</h1>
      </div>
      <div className="btn-wrapper">
        <button
          onClick={() => setProject(project)}
          className={`view-details-btn ${!hover ? "hidden" : ""}`}
        >
          VIEW DETAILS
        </button>
        <div className={`demo-btn-group ${!hover ? "hidden" : ""}`}>
          <a className="live">LIVE DEMO</a>
          <a className="code">VIEW CODE</a>
        </div>
      </div>
    </div>
  );
};
