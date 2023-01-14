const validateEligibility = require('../helpers/validationEgilibility');
const { schema } = require('../schemas/elegibilitySchema');

const checkEligibility = (data) => {
  const { elegivel, economiaAnualDeCO2, razoesInelegibilidade } = validateEligibility(data);

  const { error } = schema.validate(data);
  if (error) {
    return {
      status: 400,
      result: { message: error.message },
    };
  }

  if (elegivel) {
    return {
      status: 200,
      result: { elegivel, economiaAnualDeCO2 },
    };
  }

  return {
    status: 200,
    result: { elegivel, razoesInelegibilidade },
  };
};

module.exports = checkEligibility;
