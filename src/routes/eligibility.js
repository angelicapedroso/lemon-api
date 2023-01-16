const { Router } = require('express');
const eligibilityController = require('../controllers/eligibilityController');

const router = Router();

router.post('/', eligibilityController);

module.exports = router;
