import React from "react";
import "./ProjectModal.scss";
import { FcNext, FcPrevious } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { IProject } from "../../content/projects";
import gsap from "gsap/all";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
interface ProjectModalProps {
  next: () => void;
  previous: () => void;
  project: IProject | null;
  close: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  next,
  previous,
  project,
  close,
}) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setSelectedImage(0);
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(modalRef.current, { opacity: 0, duration: 1.6 }, { opacity: 1 });
    setTl(tl);
    tl.play();
  }, [project]);
  if (!project) return null;
  const handleSelectImage = (number: number) => {
    setSelectedImage(number);
  };
  const createNormalizedString = (arr: string[]) => {
    return arr.reduce((sum, tech, index, array) => {
      const isEnd = !!(index === array.length - 1);
      sum += tech;
      sum += !isEnd ? ", " : "";
      return sum;
    }, "");
  };
  return (
    <div ref={modalRef} className="modal-container">
      <button onClick={next} className="selector-btn next">
        <FcNext />
      </button>
      <button onClick={previous} className="selector-btn previous">
        <FcPrevious />
      </button>
      <div className="project-content">
        <div className="images-container">
          <div className="selected-image-container">
            <a
              href={project.images[selectedImage]}
              target="_blank"
              rel="noreferer"
            >
              <img src={project.images[selectedImage]} />
            </a>
          </div>
          <div className="image-selector-container">
            {project.images.map((src, index) => (
              <button key={index} onClick={() => handleSelectImage(index)}>
                <img
                  className={index === selectedImage ? "active" : ""}
                  src={src}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="info-container">
          <div className="description-container">
            <h3>Описание: </h3>
            <p>{project.description}</p>
          </div>
          <div className="frontend-container">
            <h3>Frontend: </h3>
            <p>{createNormalizedString(project.technologies.frontend)}</p>
          </div>
          <div className="backend-container">
            <h3>Backend: </h3>
            <p>{createNormalizedString(project.technologies.backend)}</p>
          </div>
        </div>

        <button
          onClick={() => {
            if (!tl) return;
            tl.reverse().then(() => close());
          }}
          className="close-btn"
        >
          <AiFillCloseCircle />
        </button>
      </div>
    </div>
  );
};
