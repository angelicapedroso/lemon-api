const checkEligibility = require('../service/eligibilityService');

const checkEligibilityController = (req, res) => {
  try {
    const { status, response } = checkEligibility(req.body);
    return res.status(status).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = checkEligibilityController;
