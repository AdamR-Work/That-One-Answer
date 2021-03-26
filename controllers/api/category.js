const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const {Answer, User, Comments, Category} = require('../../models');
router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name',
         
        ]
    })
    .then(dbAnswerData => res.json(dbAnswerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;