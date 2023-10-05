import React, { ReactNode } from "react";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
