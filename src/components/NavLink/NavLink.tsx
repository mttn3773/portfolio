import React from "react";

import { Link } from "react-scroll";
import { ILink } from "../Navbar/Navbar";
import "./NavLink.scss";

interface NavLinkProps {
  link: ILink;
  offset: number;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, offset }) => {
  const { name, tl, ref, to } = link;
  return (
    <li
      className="nav-link"
      onMouseEnter={() => {
        tl.play();
      }}
      onMouseLeave={() => {
        tl.reverse();
      }}
    >
      <Link
        activeClass="active"
        to={to}
        offset={offset}
        duration={500}
        smooth="true"
        spy={true}
      >
        {name}
      </Link>
      <span ref={ref}></span>
    </li>
  );
};
