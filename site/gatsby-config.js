module.exports = {
  siteMetadata: {
    title: `Treat Yourself`,
    description: `Self Care Resources`
    // siteUrl: `https://www.gatsbyjs.org`,
    // description: `Blazing fast modern site generator for React`
  },
  plugins: [
    {
      resolve: "gatsby-theme-stargazers",
      options: { contentPath: "events", basePath: "/events" }
    }
  ]
};
