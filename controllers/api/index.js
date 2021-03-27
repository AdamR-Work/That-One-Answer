const router = require('express').Router();


const answerRoutes = require('./answer');
const userRoutes = require('./user');
const commentRoutes = require('./comment');
const categoryRoutes = require('./category');


router.use('/user', userRoutes);
router.use('/answer', answerRoutes);
router.use('/comment', commentRoutes);
router.use('/category', categoryRoutes);

module.exports = router;