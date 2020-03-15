module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  siteMetadata: {
    title: `Gatsby`,
    // siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    { resolve: "gatsby-source-filesystem", options: { path: contentPath } },
    { resolve: "gatsby-transformer-yaml", options: { typeName: "Event" } }
  ]
});
