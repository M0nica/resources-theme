module.exports = {
  siteMetadata: {
    title: `Treat Yourself`,
    description: `Self Care Resources`,
    longDescription:
      "A directory of self care resources to help you treat yourself.",
    kofi: "https://ko-fi.com/m0nica",
    siteUrl: "https://treatyourself.netlify.com/",
    image: `src/images/site-preview.png`
  },
  plugins: [
    {
      resolve: "gatsby-theme-resources",
      options: { contentPath: "resources", basePath: "/" }
    }
  ]
};
