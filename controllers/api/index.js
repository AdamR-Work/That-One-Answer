
const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
// const { User, Answer, Comments, Category, Steps } = require('../../models');

const answerRoutes = require('./answer');
const userRoutes = require('./user');
const commentRoutes = require('./comment');
const categoryRoutes = require('./category');
const stepsRoutes = require('./step');


router.use('/user', userRoutes);
router.use('/answer', answerRoutes);
router.use('/comment', commentRoutes);
router.use('/category', categoryRoutes);
router.use('/step', stepsRoutes);

module.exports = router;