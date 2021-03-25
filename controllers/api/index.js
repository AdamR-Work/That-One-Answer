const router = require('express').Router();

const answerRoutes = require('./answer');

router.use('/answer',answerRoutes);

module.exports = router;