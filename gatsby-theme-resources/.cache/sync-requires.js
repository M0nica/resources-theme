const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-events-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/gatsby-theme-stargazers/src/templates/events.js"))),
  "component---src-templates-event-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/gatsby-theme-stargazers/src/templates/event.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/monica/Dev/stargazer-theme/gatsby-theme-stargazers/.cache/dev-404-page.js")))
}

