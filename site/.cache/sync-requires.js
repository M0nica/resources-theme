const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-stargazers-src-templates-events-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/gatsby-theme-stargazers/src/templates/events.js"))),
  "component---gatsby-theme-stargazers-src-templates-event-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/gatsby-theme-stargazers/src/templates/event.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/site/.cache/dev-404-page.js")))
}

