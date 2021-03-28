const router = require('express').Router();
const { User, Answer, Comments, Steps, Category } = require("../models")

router.get('/', (req, res) => {
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

        let tempResponse = [];
        for (let i = 0; i < 5; i++) {
            const element = response[i];
            tempResponse.push(element);
        }             
    
        let hbsObj = {category: tempResponse};
    
        myObject = {hbsObj, loggedIn: req.session.loggedIn};
        console.log(myObject);
        res.render("categories",myObject);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });