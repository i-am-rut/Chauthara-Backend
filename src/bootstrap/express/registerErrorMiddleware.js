import errorMiddleware from "../../shared/middleware/error.middleware.js";

function registerErrorMiddleware(app) {
  app.use(errorMiddleware);
}

export default registerErrorMiddleware;