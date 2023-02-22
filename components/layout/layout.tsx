import React, { ReactNode } from "react";
import NavBar from "./navigation/navBar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;