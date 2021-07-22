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
  const handleAnimation = (ref: HTMLSpanElement): gsap.core.Timeline => {
    return gsap.timeline({ paused: true }).to(
      ref,
      {
        width: "100%",
        background: UNDERLINE_COLOR,
        height: UNDERLINE_HEIGHT,
        immediateRender: false,
      },
      0
    );
  };
  const handleReverse = (ref: HTMLSpanElement): gsap.core.Timeline => {
    return gsap.timeline({ paused: true }).to(
      ref,
      {
        width: 0,
        background: UNDERLINE_COLOR,
        height: UNDERLINE_HEIGHT,
        immediateRender: false,
      },
      0
    );
  };
  return (
    <nav>
      <ul>
        <li
          onMouseEnter={() => {
            if (!aboutRef.current) return;
            handleAnimation(aboutRef.current).play();
          }}
          onMouseLeave={() => {
            if (!aboutRef.current) return;
            handleReverse(aboutRef.current).play();
          }}
        >
          <a>Обо мне</a>
          <span ref={aboutRef}></span>
        </li>
        <li
          onMouseEnter={() => {
            if (!technologiesRef.current) return;
            handleAnimation(technologiesRef.current).play();
          }}
          onMouseLeave={() => {
            if (!technologiesRef.current) return;
            handleReverse(technologiesRef.current).play();
          }}
        >
          <a>Технологии</a>
          <span ref={technologiesRef}></span>
        </li>
        <li
          onMouseEnter={() => {
            if (!projectstRef.current) return;
            handleAnimation(projectstRef.current).play();
          }}
          onMouseLeave={() => {
            if (!projectstRef.current) return;
            handleReverse(projectstRef.current).play();
          }}
        >
          <a>Проекты</a>
          <span ref={projectstRef}></span>
        </li>
      </ul>
    </nav>
  );
};
