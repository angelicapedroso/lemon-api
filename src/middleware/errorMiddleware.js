const errorMiddleware = (err, _req, res, _next) => {
  if (err.schemaError) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
