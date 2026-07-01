import routes from "../../api/routes/index.js";

function registerRoute(app) {
  app.use("/api", routes);
}

export default registerRoute;
