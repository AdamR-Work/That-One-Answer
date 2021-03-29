
const router = require('express').Router();
const sequelize = require('../../config/connection');
//need? below
const withAuth = require('../../utils/auth');
const checkNotAuthenticated = require('../../utils/notcheck');
const checkAuthenticated = require('../../utils/check.js');
const bcrypt = require('bcrypt');
const passport = require('passport');
//need? above

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