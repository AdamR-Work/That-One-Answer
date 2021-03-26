const router = require('express').Router();

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