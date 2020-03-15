import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import ResourceList from "../components/resource-list";

const ResourcesTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allResource(sort: { fields: name, order: ASC }) {
        nodes {
          id
          name
          url
          slug
          type
          description
        }
      }
    }
  `);
  const resources = data.allResource.nodes;
  return (
    <Layout>
      <ResourceList resources={resources} />
    </Layout>
  );
};

export default ResourcesTemplate;
