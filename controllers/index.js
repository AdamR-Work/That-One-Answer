const router = require('express').Router();

// add more routes
const apiRoutes = require('./api/');

// add more router uses ie router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

