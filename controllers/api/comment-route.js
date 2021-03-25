const router = require('express').Router();
const sequelize = require('../../config/connection');
const {Answer, User, Comments} = require('../../models');

module.exports = router;