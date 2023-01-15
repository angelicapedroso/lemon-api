const validateEligibility = require('../helpers/validationEgilibility');
const { schema } = require('../schemas/elegibilitySchema');
const schemaError = require('../helpers/schemaError');

const checkEligibility = (data) => {
  const { elegivel, economiaAnualDeCO2, razoesInelegibilidade } = validateEligibility(data);

  const { error } = schema.validate(data);
  if (error) throw schemaError(error.message);

  if (elegivel) return { elegivel, economiaAnualDeCO2 };

  return { elegivel, razoesInelegibilidade };
};

module.exports = checkEligibility;
