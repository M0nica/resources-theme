/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

import { StaticQuery, graphql } from "gatsby";

const Kofi = () => (
  <StaticQuery
    query={graphql`
      query KofiQuery {
        site {
          siteMetadata {
            kofi
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <a href={data.site.siteMetadata.kofi}>
            buy me a cup of tea <FontAwesomeIcon icon={faMugHot} />
          </a>
        </>
      );
    }}
  />
);

export default Kofi;
