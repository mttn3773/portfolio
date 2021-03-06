import React from "react";
import { useState, useEffect, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import gsap from "gsap/all";

import { config } from "../../content";
import { Link } from "react-scroll";
import "./SideBar.scss";

interface SideBarProps {
  isOpen: boolean;
  close: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, close }) => {
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const { links } = config;
  useEffect(() => {
    const tl = gsap
      .timeline({ paused: true })
      .fromTo(
        sideBarRef.current,
        { translateX: 300, duration: 1 },
        { translateX: 0 }
      );
    setTl(tl);
    tl.play();
  }, [isOpen]);
  const handleClose = () => {
    if (!tl) return;
    tl.reverse().then(close);
  };
  if (!isOpen) return null;
  return (
    <div ref={sideBarRef} className="sidebar-container">
      <button onClick={handleClose}>
        <AiFillCloseCircle />
      </button>
      <ul>
        {links.map(({ to, name }, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
                to={to}
                offset={-100}
                duration={500}
                smooth="true"
                spy={true}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
