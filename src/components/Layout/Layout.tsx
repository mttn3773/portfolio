import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Layout.scss";
interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
