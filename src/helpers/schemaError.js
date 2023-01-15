const schemaError = (message) => {
  const error = new Error(message);
  error.schemaError = true;
  return error;
};

module.exports = schemaError;
