import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Event from "../components/event";

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`;

const EventTemplate = ({ data: { event } }) => {
  const { slug } = event;
  const basePath = slug.match(/\/[a-z]+\//g)[0] || "/";

  return (
    <Layout>
      <Event {...event} />
      <Link to={basePath}> View All Events</Link>
    </Layout>
  );
};

export default EventTemplate;
