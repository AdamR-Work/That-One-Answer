const router = require('express').Router();
const {User, Answer, Comments, Category, Steps} = require("../models")
// add more routes
const apiRoutes = require('./api/');
const homeRoutes = require('./homepage');
const answerRoutes = require('./answerpage');
const dashboardRoutes = require('./dashboard');
// add more router uses ie router.use('/', homeRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/answer', answerRoutes);
router.use('/dashboard', dashboardRoutes);





module.exports = router;

