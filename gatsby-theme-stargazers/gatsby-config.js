module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  siteMetadata: {
    title: `Gatsby`,
    // siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Anonymous Pro`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    { resolve: "gatsby-source-filesystem", options: { path: contentPath } },
    { resolve: "gatsby-transformer-yaml", options: { typeName: "Resource" } }
  ]
});
