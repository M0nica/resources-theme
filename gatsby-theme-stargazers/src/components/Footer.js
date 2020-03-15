/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Kofi from "./Kofi";

// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "eggplant",
        color: "white",
        a: { color: "white" },
        marginTop: "auto",
        minHeight: "200px",
        padding: "1em",
        textAlign: "center"
      }}
    >
      <div>
        {" "}
        <h2> Nice to see you! 👋🏾 💐</h2>
        <h3>Would you like to tend to this project?</h3>
        Contribute a resource or <Kofi />!
      </div>
    </footer>
  );
};

export default Footer;
