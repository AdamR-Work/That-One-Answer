const router = require('express').Router();
const { User, Answer, Comments, Steps, Category } = require("../models")

router.get('/dashboard', (req, res) => {
    Category.findAll({
        where: {
            category_id: req.params.id
        },
        attributes: [
            'id',
            'category_name'

        ],
        include: [
            {
                model: Category,
                attributes: ['category_name']
            },

        ]
    })
        .then(response => {
            let hbsObj = response.dataValues
            console.log(response.dataValues)
            res.render("category", hbsObj)
        })
});
