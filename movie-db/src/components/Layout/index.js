import React from "react";
import { LayoutBody, LayoutContainer } from "./Layout.style";
import PropTypes from 'prop-types'

const Layout = ({ header, children }) => {
  return (
    <LayoutContainer>
      <h1>{header}</h1>
      <LayoutBody>{children}</LayoutBody>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  header: PropTypes.string,
}

export default Layout;
