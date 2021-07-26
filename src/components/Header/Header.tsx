import gsap, { Power0 } from "gsap";
import React, { useEffect, useMemo, useRef } from "react";
import "./Header.scss";

// ANIMATION SETTING
const ANIMATION_EASE = Power0.easeIn;
const SIDE_WIDTH = 7;
const ANIMATION_DURATION = 0.4;
const SIDE_COLOR = "salmon";
//

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const leftSideRef = useRef<HTMLDivElement | null>(null);
  const topSideRef = useRef<HTMLDivElement | null>(null);
  const rightSideRef = useRef<HTMLDivElement | null>(null);
  const bottomSideRef = useRef<HTMLDivElement | null>(null);
  const tl = useMemo(() => gsap.timeline({ paused: true }), []);
  useEffect(() => {
    tl.fromTo(
      leftSideRef.current,
      {
        height: 0,
        width: SIDE_WIDTH,
        background: SIDE_COLOR,
        duration: ANIMATION_DURATION,
        ease: ANIMATION_EASE,
      },
      {
        background: SIDE_COLOR,
        height: "100%",
      }
    )
      .fromTo(
        topSideRef.current,
        {
          width: 0,
          height: SIDE_WIDTH,
          duration: ANIMATION_DURATION,
          background: SIDE_COLOR,
          ease: ANIMATION_EASE,
        },
        { background: SIDE_COLOR, width: "100%" }
      )
      .fromTo(
        rightSideRef.current,
        {
          height: 0,
          width: SIDE_WIDTH,
          duration: ANIMATION_DURATION,
          background: SIDE_COLOR,
          ease: ANIMATION_EASE,
        },
        { background: SIDE_COLOR, height: "100%" }
      )
      .fromTo(
        bottomSideRef.current,
        {
          width: 0,
          height: SIDE_WIDTH,
          duration: ANIMATION_DURATION,
          background: SIDE_COLOR,
          ease: ANIMATION_EASE,
        },
        { background: SIDE_COLOR, width: "100%" }
      );
  }, []);
  return (
    <div className="header-container">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/header-image.jpg)`,
        }}
      ></div>
      <div
        onMouseEnter={() => tl.play()}
        onMouseLeave={() => tl.reverse()}
        className="text-container"
      >
        <h1 style={{ color: "rgb(53, 140, 214)" }}>Developer</h1>
        <h1 style={{ color: "rgb(93, 65, 121)" }}> Backend </h1>
        <hr />
        <h1 style={{ color: "rgb(221, 221, 147)" }}> Frontend </h1>
        <span ref={leftSideRef} className="side left"></span>
        <span ref={topSideRef} className="side top"></span>
        <span ref={rightSideRef} className="side right"></span>
        <span ref={bottomSideRef} className="side bottom"></span>
      </div>
    </div>
  );
};
