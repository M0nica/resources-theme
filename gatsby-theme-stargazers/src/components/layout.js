import React from "react";
import { Heading, Container } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <>
      {" "}
      <Heading>Gatsby Events Theme</Heading>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
