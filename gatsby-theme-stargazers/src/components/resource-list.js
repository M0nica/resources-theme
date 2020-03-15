/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState } from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";
import { ResourceType } from "./resource";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ResourceList = ({ resources }) => {
  const emptyQuery = "";

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleInputChange = event => {
    const query = event.target.value;

    const filteredData = resources.filter(resource => {
      const { name, type, description } = resource;
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        name.toLowerCase().includes(query.toLowerCase()) ||
        type.toLowerCase().includes(query.toLowerCase())
      );
    });

    setState({
      query,
      filteredData
    });
  };

  const { filteredData, query } = state;
  const allResources = resources;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const processedResources = hasSearchResults ? filteredData : allResources;

  return (
    <>
      <div
        className="searchBox"
        sx={{
          marginLeft: "5em",
          marginRight: "5em",
          maxWidth: 700,
          margin: "0 auto"
        }}
      >
        <input
          type="text"
          aria-label="Search"
          placeholder="Type to filter resources..."
          onChange={handleInputChange}
          className="searchInput"
          sx={{
            display: "inline-block",
            border: 2,
            borderRadius: 4,
            padding: "0.75rem",
            outline: "none",
            marginBottom: "1rem",
            fontSize: "1.1rem",
            fontWeight: "500",
            width: "80%",
            maxWidth: "80%",
            lineHeight: "1"
          }}
        />{" "}
        {
          <div
            className="postCount"
            sx={{
              width: 40,
              lineHeight: "40px",
              height: 40,
              borderRadius: "50%",
              textAlign: "center",
              fontSize: "1em",
              display: "inline-block",
              backgroundColor: "primary",
              color: "background"
            }}
          >
            {processedResources.length}{" "}
          </div>
        }
      </div>

      {processedResources.length === 0 && (
        <p className="noSearchResults">
          There were no results found for "{query}". Below you can explore all
          the resources we have:
        </p>
      )}
      <Styled.ul>
        {(processedResources.length ? processedResources : resources).map(
          resource => (
            <Styled.li key={resource.id}>
              <strong>
                <Link to={resource.slug}>
                  {resource.name} <FontAwesomeIcon icon={faLink} />
                </Link>{" "}
                {resource.type && <ResourceType>{resource.type}</ResourceType>}
              </strong>
              <br />
              {resource.description && resource.description}
            </Styled.li>
          )
        )}
      </Styled.ul>
    </>
  );
};

export default ResourceList;
