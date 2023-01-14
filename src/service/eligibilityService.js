const validateEligibility = require('../helpers/validationEgilibility');
const { schema } = require('../schemas/elegibilitySchema');

const checkEligibility = (data) => {
  const { elegivel, economiaAnualDeCO2, razoesInelegibilidade } = validateEligibility(data);

  const { error } = schema.validate(data);
  if (error) {
    return {
      status: 400,
      response: { message: error.message },
    };
  }

  if (elegivel) {
    return {
      status: 200,
      response: { elegivel, economiaAnualDeCO2 },
    };
  }

  return {
    status: 200,
    response: { elegivel, razoesInelegibilidade },
  };
};

module.exports = checkEligibility;
