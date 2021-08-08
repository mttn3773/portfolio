import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { SideBar } from "../SideBar/SideBar";
import "./Layout.scss";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [offset, setOffset] = useState<number>(window.pageYOffset);
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const isNavTransparent = !!(offset < 500);
  const toggleMenu = () => {
    setSideBarOpen(!isSideBarOpen);
  };
  const handleClose = () => {
    setSideBarOpen(false);
  };
  return (
    <>
      <SideBar close={handleClose} isOpen={isSideBarOpen} />
      <Navbar toggleMenu={toggleMenu} isTransparent={isNavTransparent} />
      {children}
    </>
  );
};
