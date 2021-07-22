import React from "react";
import "./Navbar.scss";
import gsap from "gsap";
import { Power0 } from "gsap";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
interface NavbarProps {}

const UNDERLINE_HEIGHT = 2;
const ANIMATION_EASE = Power0.easeInOut;
const UNDERLINE_COLOR = "salmon";

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const aboutRef = useRef<HTMLSpanElement | null>(null);
  const technologiesRef = useRef<HTMLSpanElement | null>(null);
  const projectstRef = useRef<HTMLSpanElement | null>(null);
  const aboutTl = gsap.timeline({ paused: true });
  const techTl = gsap.timeline({ paused: true });
  const projectsTl = gsap.timeline({ paused: true });
  useEffect(() => {
    if (!(aboutRef.current && technologiesRef.current && projectstRef.current))
      return;
    aboutTl.fromTo(
      aboutRef.current,
      {
        width: 0,
        background: UNDERLINE_COLOR,
        height: UNDERLINE_HEIGHT,
        ease: ANIMATION_EASE,
      },
      { width: "100%" }
    );
    techTl.fromTo(
      technologiesRef.current,
      {
        width: 0,
        background: UNDERLINE_COLOR,
        height: UNDERLINE_HEIGHT,
        ease: ANIMATION_EASE,
      },
      { width: "100%" }
    );
    projectsTl.fromTo(
      projectstRef.current,
      {
        width: 0,
        background: UNDERLINE_COLOR,
        height: UNDERLINE_HEIGHT,
        ease: ANIMATION_EASE,
      },
      { width: "100%" }
    );
  }, []);
  return (
    <nav>
      <ul>
        <li
          onMouseEnter={() => {
            aboutTl.play();
          }}
          onMouseLeave={() => {
            aboutTl.reverse();
          }}
        >
          <a>Обо мне</a>
          <span ref={aboutRef}></span>
        </li>
        <li
          onMouseEnter={() => {
            techTl.play();
          }}
          onMouseLeave={() => {
            techTl.reverse();
          }}
        >
          <a>Технологии</a>
          <span ref={technologiesRef}></span>
        </li>
        <li
          onMouseEnter={() => {
            projectsTl.play();
          }}
          onMouseLeave={() => {
            projectsTl.reverse();
          }}
        >
          <a>Проекты</a>
          <span ref={projectstRef}></span>
        </li>
      </ul>
    </nav>
  );
};
