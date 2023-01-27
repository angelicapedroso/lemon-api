const validateEligibility = require('../helpers/validationEgilibility');

const eligibilityService = (data) => {
  const { elegivel, economiaAnualDeCO2, razoesInelegibilidade } = validateEligibility(data);

  if (elegivel) return { elegivel, economiaAnualDeCO2 };

  return { elegivel, razoesInelegibilidade };
};

module.exports = eligibilityService;
