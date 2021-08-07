import React from "react";
import { IProject } from "../../content/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Carousel from "react-elastic-carousel";
import { config } from "../../content";
import "./Projects.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
interface ProjectsProps {
  setProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

export const Projects: React.FC<ProjectsProps> = ({ setProject }) => {
  const { projects } = config;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const carouselRef = useRef<Carousel | null>(null);
  const handleChange = () => {};
  return (
    <div className="projects-wrapper">
      <h1>ПРОЕКТЫ</h1>
      <div className="projects-container">
        <Carousel itemsToShow={1} isRTL={false}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              setProject={setProject}
              project={project}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
