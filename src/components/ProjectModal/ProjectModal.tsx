import React from "react";
import "./ProjectModal.scss";
import { FcNext, FcPrevious } from "react-icons/fc";
import { AiFillCloseCircle } from "react-icons/ai";
import { IProject } from "../../content/projects";
import gsap from "gsap/all";
import { useEffect } from "react";
import { useRef } from "react";
interface ProjectModalProps {
  project: IProject | null;
  close: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  close,
}) => {
  const tl = gsap.timeline({ paused: true });
  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!project) return;
    tl.fromTo(
      modalRef.current,
      { opacity: 0, duration: 1 },
      { opacity: 1 }
    ).play();
  }, [project]);
  if (!project) return null;
  return (
    <div ref={modalRef} className="modal-container">
      <button className="selector-btn next">
        <FcNext />
      </button>
      <button className="selector-btn previous">
        <FcPrevious />
      </button>
      <div className="project-content">
        <div className="images-container"></div>
        <div className="description-container"></div>
        <button
          onClick={() => {
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
