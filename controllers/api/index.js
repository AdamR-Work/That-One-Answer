const router = require('express').Router();

//const answerRoutes = require('./answer');
const userRoutes = require('./user-route');

// router.use('/answer',answerRoutes)
router.use('/user',userRoutes);


module.exports = router;