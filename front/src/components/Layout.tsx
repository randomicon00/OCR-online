import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div> 
  );
}

export default Layout;

