const { Router } = require('express');
const eligibilityController = require('../controller/eligibilityController');

const router = Router();

router.post('/', eligibilityController);

module.exports = router;
