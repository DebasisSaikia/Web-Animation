import React from "react";
import { LayoutBody, LayoutContainer } from "./Layout.style";

const Layout = ({ header, children }) => {
  return (
    <LayoutContainer>
      <h1>{header}</h1>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
};

export default Layout;
