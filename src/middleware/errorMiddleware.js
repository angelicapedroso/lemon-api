/* eslint-disable consistent-return */
// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, next) => {
  if (err.schemaError) {
    return res.status(200).json({ message: err.message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
