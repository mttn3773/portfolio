import gsap, { Power0 } from "gsap";
import React, { createRef, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { config } from "../../content";
import { NavLink } from "../NavLink/NavLink";
import "./Navbar.scss";

// ANIMATION SETTING
const UNDERLINE_HEIGHT = 2;
const ANIMATION_EASE = Power0.easeInOut;
const ANIMATION_DURATION = 0.5;
const UNDERLINE_COLOR = "salmon";
//

interface NavbarProps {
  isTransparent: boolean;
  toggleMenu: () => void;
}
export interface ILink {
  name: string;
  to: string;
  ref: React.MutableRefObject<HTMLSpanElement | null>;
  tl: gsap.core.Timeline;
}
export const Navbar: React.FC<NavbarProps> = ({
  isTransparent,
  toggleMenu,
}) => {
  const [links, setLinks] = useState<ILink[]>([]);
  const { links: LINKS } = config;
  useEffect(() => {
    if (links.length === LINKS.length) return;
    LINKS.forEach(({ name, to }) => {
      const ref = createRef<null>();
      const tl = gsap.timeline({ paused: true });
      setLinks((prev) => [...prev, { ref, tl, name, to }]);
    });
  }, [LINKS]);
  useEffect(() => {
    if (!(links.length === LINKS.length)) return;
    links.forEach(({ ref, tl }) => {
      tl.fromTo(
        ref.current,
        {
          width: 0,
          background: UNDERLINE_COLOR,
          height: UNDERLINE_HEIGHT,
          ease: ANIMATION_EASE,
          duration: ANIMATION_DURATION,
        },
        { width: "100%" }
      );
    });
  }, [links]);
  return (
    <nav className={isTransparent ? "transparent" : ""}>
      <ul>
        {links.map((link, index) => {
          return (
            <div key={index} className="link-wrapper">
              <NavLink offset={-100} link={link} />
            </div>
          );
        })}
      </ul>
      <div className="menu-container">
        <button>
          <AiOutlineMenu onClick={toggleMenu} />
        </button>
      </div>
    </nav>
  );
};
