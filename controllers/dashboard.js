const router = require('express').Router();
const {User, Answer, Comments,Steps} = require("../models")

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
                model: Answer,
                attributes: ['title']
            },
           
        ]
    })
    .then(response => {
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("dashboard", hbsObj)
    })
});


// below i was still figuering out how to go from category to answer page
// or do we go from categroies .then click and show all the items in that cat?
router.get('/dashboard/:id', (req, res) => {
    Answer.findOne({
        where: {
            id: 1   // this has to change to based off of user log in. its just hard coded atm
        },
        attributes:[
            'id',
            'title',
            'description'

        ],
        include: [
            {
                model:User,
                attributes: ['username']
            },
            {
                model: Comments,
                attributes: ['comment_text', 'steps_id']
            },
            {
                model: Steps,
                attributes:['step_text', 'step_number']
            }
        ]
    }).then(response => {
        let hbsObj = response.dataValues
        console.log(response.dataValues)
        res.render("answer", hbsObj)
    })
})