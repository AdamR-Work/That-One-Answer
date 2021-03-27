const router = require('express').Router();
const {User, Answer, Comments,Category} = require("../models")
// add more routes
const apiRoutes = require('./api/');
const homeRoutes = require('./homepage');
const answerRoutes = require('./answerpage');
// add more router uses ie router.use('/', homeRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/answer', answerRoutes);




module.exports = router;

