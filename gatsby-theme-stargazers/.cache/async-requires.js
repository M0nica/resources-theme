// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-events-js": () => import("./../src/templates/events.js" /* webpackChunkName: "component---src-templates-events-js" */),
  "component---src-templates-event-js": () => import("./../src/templates/event.js" /* webpackChunkName: "component---src-templates-event-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

