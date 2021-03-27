const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

const {Answer, User, Comments, Category} = require('../../models');

module.exports = router;