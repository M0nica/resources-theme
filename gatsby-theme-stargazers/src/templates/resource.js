import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Resource from "../components/resource";

export const query = graphql`
  query($resourceID: String!) {
    resource(id: { eq: $resourceID }) {
      name
      url
      slug
      type
      description
    }
  }
`;

const ResourceTemplate = ({ data: { resource } }) => {
  const { slug } = resource;
  const basePath = slug.match(/\/[a-z]+\//g)[0] || "/";

  return (
    <Layout>
      <Resource {...resource} />
      <Link to={basePath}> View All Resources</Link>
    </Layout>
  );
};

export default ResourceTemplate;
