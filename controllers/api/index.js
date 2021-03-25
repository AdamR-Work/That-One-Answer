const router = require('express').Router();


const answerRoutes = require('./answer');
const userRoutes = require('./user-route');


router.use('/user',userRoutes);
router.use('/answer',answerRoutes);

module.exports = router;