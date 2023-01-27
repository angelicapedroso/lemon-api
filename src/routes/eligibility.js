const { Router } = require('express');
const eligibilityController = require('../controllers/eligibilityController');
const validatorMiddleware = require('../middlewares/validatorMiddleware');

const router = Router();

router.post('/', validatorMiddleware, eligibilityController);

module.exports = router;
