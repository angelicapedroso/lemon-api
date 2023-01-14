const checkEligibility = require('../service/eligibilityService');

const checkEligibilityController = (req, res) => {
  try {
    const response = checkEligibility(req.body);
    const { status, result } = response;
    return res.status(status).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = checkEligibilityController;
