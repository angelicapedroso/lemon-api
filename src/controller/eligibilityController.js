const checkEligibility = require('../service/eligibilityService');

const checkEligibilityController = (req, res) => {
  const data = checkEligibility(req.body);
  return res.status(200).json(data);
};

module.exports = checkEligibilityController;
