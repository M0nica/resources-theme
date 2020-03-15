const fs = require("fs");
// 1. make sure that the data directory exists
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data";
  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};
// 2. define the resource type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Resource implements Node @dontInfer {
        id: ID!
        name: String!
        url: String!
        slug: String! 
        type: String!
        description: String!
    }`);
};
// 3, define resolvers for any custom fields (i.e., slug)

exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || "/";
  const slugify = str => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    return `/${basePath}/${slug}`.replace(/\/\/+/g, "/");
  };

  createResolvers({
    Resource: {
      slug: {
        resolve: source => slugify(source.name)
      }
    }
  });
};
// 4. query for resources and create pages

exports.createPages = async ({ actions, graphql, reporter }, options) => {
  const basePath = options.basePath || "/";
  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/resources.js")
  });

  const result = await graphql(
    `
      query {
        allResource(sort: { fields: name, order: ASC }) {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panic("error loading resources", result.errors);
    return;
  }

  const resources = result.data.allResource.nodes;

  resources.forEach(resource => {
    const slug = resource.slug;
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/resource.js"),
      context: {
        resourceID: resource.id
      }
    });
  });
};
