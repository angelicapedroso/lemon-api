const checkEligibility = require('../service/eligibilityService');

const checkEligibilityController = (req, res) => {
  const result = checkEligibility(req.body);
  res.status(200).json(result);
};

module.exports = checkEligibilityController;
