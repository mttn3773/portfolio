import gsap, { Power0 } from "gsap";
import React, { createRef, useEffect, useState } from "react";
import { NavLink } from "../NavLink/NavLink";
import { CONFIG } from "../../content.config";
import "./Navbar.scss";

const LINKS = CONFIG.links;

// ANIMATION SETTING
const UNDERLINE_HEIGHT = 2;
const ANIMATION_EASE = Power0.easeInOut;
const ANIMATION_DURATION = 0.5;
const UNDERLINE_COLOR = "salmon";
//

interface NavbarProps {
  isTransparent: boolean;
}
export interface ILink {
  name: string;
  to: string;
  ref: React.MutableRefObject<HTMLSpanElement | null>;
  tl: gsap.core.Timeline;
}
export const Navbar: React.FC<NavbarProps> = ({ isTransparent }) => {
  const [links, setLinks] = useState<ILink[]>([]);
  useEffect(() => {
    if (links.length === LINKS.length) return;
    LINKS.forEach(({ name, to }) => {
      const ref = createRef<null>();
      const tl = gsap.timeline({ paused: true });
      setLinks((prev) => [...prev, { ref, tl, name, to }]);
    });
  }, []);
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
              <NavLink link={link} />
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
