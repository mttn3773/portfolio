import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Layout.scss";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [offset, setOffset] = useState<number>(window.pageYOffset);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const isNavTransparent = !!(offset < 500);
  return (
    <>
      <Navbar isTransparent={isNavTransparent} />
      {children}
    </>
  );
};
