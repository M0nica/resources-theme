module.exports = {
  siteMetadata: {
    title: `Treat Yourself`,
    description: `Self Care Resources`,
    kofi: "https://ko-fi.com/m0nica"
    // siteUrl: `https://www.gatsbyjs.org`,
    // description: `Blazing fast modern site generator for React`
  },
  plugins: [
    {
      resolve: "gatsby-theme-resources",
      options: { contentPath: "resources", basePath: "/" }
    }
  ]
};
