function registerErrorMiddleware(app) {
  app.use((err, req, res, next) => {
    void next;

    res.status(500).json({
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal Server Error",
      },
    });
  });
}

export default registerErrorMiddleware;