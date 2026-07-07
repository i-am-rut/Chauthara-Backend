import routes from "./routesIndex.js";

function registerRoute(app) {
  app.use("/api", routes);
}

export default registerRoute;
