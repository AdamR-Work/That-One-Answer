const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { User, Answer, Comments, Category, Steps } = require('../../models');

//.../api/category all categories
router.get('/', (req, res) => {
    Category.findAll({
        attributes: [
            'id',
            'category_name',
         
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Answer,
                attributes: ['title', 'description']
            }
        ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res)=> {
    Category.findOne({
        where:{
            id: req.params.id
        },
        attributes:[
            'id',
            'category_name'
        ],
        include:[
            {
                model: Answer,
                attributes:['title','id','description']
            }
        ]
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
module.exports = router;